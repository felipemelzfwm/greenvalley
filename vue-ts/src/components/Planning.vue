<template>
  <section>
      <div class="p-1">
       <h1> Planejamento </h1>
       <div id="form" style="width:100%;">		
			<div id="form" style="width:100%;">
				<div v-for="formitem in inputformitems" :key="formitem.idx" style="width:100%; margin-top: 10px;" types='item' :colors="formitem.colors" :id="'item'+formitem.idx">
					
					<label style="height:30px; color: black;" type='text' name='idx' :itemIdx="formitem.idx">{{formitem.idx + ' - '}}</label>
					<label style="width:15%; color: black;">Etapa  </label>
					<input style="width:10%" type='text' name='name' :value="formitem.name" v-on:input="updateGraph"></input>
					<label style="width:15%; color: black;">    Dependência  </label>
					<input style="height:30px; width:5%" type='number' name='dependency' forItem='' value=""  v-on:input="updatedDependency"  min="1" oninput="validity.valid||(value='');"></input>
					<label style="width:15%; color: black;">    Nº Unidades  </label>
					<input style="height:30px; width:3%" type='number' name='units' value="5" v-on:input="updateGraph" min="1" oninput="validity.valid||(value='');"></input>
					<label style="width:15%; color: black;">    Tempo(dias)/unid  </label>
					<input style="height:30px; width:3%" type='number' name='duration' value="10" v-on:input="updateGraph" min="1" oninput="validity.valid||(value='');"></input>
					<label style="width:15%; color: black;">    Início  </label>
					<input style="width:15%; width:8%" type='text' name='startdate' value="04/10/2013" v-on:input="updateGraph"></input>
					<label style="width:15%; color: black;">    Fim  </label>
					<input style="width:15%; width:8%; cursor: not-allowed;" type='text' name='enddate' disabled="true" value="04/11/2013" v-on:input="updateGraph"> </input>
					<label style="width:15%; color: black;">    Dia  </label>
					<input style="width:15%; width:2%; cursor: not-allowed;" type='text' name='endday' disabled="true" value=""> </input>
					<label @click="deleteItem" style="cursor:'pointer'; color: black;"> X </label>
				</div>
			</div>
		</div>
		<button @click="createNewItem" style="margin-top: 10px; margin-bottom: 10px; margin-left: 50%; -ms-transform: translate(-50%, 0%);
transform: translate(-50%, 0%); cursor: pointer;"> Adicionar Etapa </button>
		<div id="tester" style="width:100%" ></div>
      </div>
  </section>
</template>

<style>
.p-1 {
  padding: 1em;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import moment from 'moment';
import Plotly from 'plotly.js-dist';

@Component
export default class Planning extends Vue {

	data () {
		return {
		executionCalendar: [],
		/*{
			'date':'',
			'dia':1,
			'etapa':1,
			'unidade':1
			'equipe':1
		}*/


		transTable: [
			['Sim','true'],
			['Não','false'],
			['Sim',true],
			['Não',false]
		],
		endEtapasCalendar: [],
		trace1: {
		  x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00'],
		  y: [10, 15],
		  text: ['Text A', 'Text B'],
		  mode: 'lines',
		  type: "scatter",
		  name: 'Fundação',
		  line: {color: '#17BECF'}
		},

		traces: [ this.trace1 ],
		inputformitems: [{
			idx: 1,
			name: "Fundacao",
			colors: "#17BECF"
		}],
		layout: {
		  title: 'Linha de Balanço',
		  xaxis: {
		    autorange: true,
		    range: ['2013-10-04', '2013-11-04'],
		    rangeselector: {buttons: [
			{
			  count: 1,
			  label: '1m',
			  step: 'month',
			  stepmode: 'backward'
			},
			{
			  count: 6,
			  label: '6m',
			  step: 'month',
			  stepmode: 'backward'
			},
			{ 
			  step: 'all',
			  label: 'tudo'}
		      ]},
		    rangeslider: {range: ['2013-10-04', '2013-11-04']},
		    type: 'date'
		  },
		  yaxis: {
		    autorange: true,
		    range: [0, 20],
		    type: 'linear'
		  },
		  hovermode: 'closest',
		  hovertemplate: '%{x:$}'
		},

		config: {
			locale: 'pt-BR', 
			"displaylogo": false
		},
		TESTER: document.getElementById('tester')
	   }
	}
	mounted () {
		//Plotly.register(this.config.locale);
		Plotly.setPlotConfig(this.config)

		Plotly.newPlot(document.getElementById('tester'), [ this.trace1 ], this.layout);
		this.updateGraph();
	}
	updated() {
		this.updateGraph();
	}
	createNewItem() {
		this.inputformitems.push({
			idx: this.inputformitems.length + 1,
			name: "Fundacao",
			colors: '#' + Math.floor(Math.random()*16777215).toString(16)
		});
		//this.updateGraph();
	}
 	 deleteItem(event) {
 	   if (this.inputformitems.length > 1) {


		var id = event.target.parentElement.id;
 	   	console.log("id = " + id);
		var idx = id.substring(4) -1;
 	   	console.log("idx = " + idx);
		this.inputformitems.splice(idx, 1);
		
		//event.target.parentElement.remove();
		var form = document.getElementById('form');
		var els = form.querySelectorAll('[types="item"]');
		this.updateAllItemIdx();
		var r = this.updateAllDependencyForLabel(els);

	  }
	}

	dep_resolve(node, resolved, unresolved, fullList) {
		unresolved.push(node);
		var retorno = true;
		for (var i = 0; i < node.edges.length; i++) {
			var edge = node.edges[i];
			if (resolved.map(e => e.name).indexOf(edge.name) == -1) {
				if (unresolved.map(e => e.name).indexOf(edge.name) != -1) {
					//alert('erro');
					retorno = false;
					return {'status': false, message: `Referência circular detectada: Etapa ${node.name} -> ${edge.name}`};
					break;
				}
				var ret = this.dep_resolve(fullList[fullList.map(e=>e.name).indexOf(edge.name)], resolved, unresolved, fullList);
				return ret;
			}
		};
		resolved.push(node);
		const index = unresolved.map(e => e.name).indexOf(node.name);
		if (index > -1) {
		  unresolved.splice(index, 1);
		} else alert('Rproblema');
		return {'status':retorno}
		//fonte:https://www.electricmonk.nl/docs/dependency_resolving_algorithm/dependency_resolving_algorithm.html
	}

	checkDependenciaCircular() {
		var etapas = document.querySelectorAll('[name="dependency"]');
		var data = [];
		etapas.forEach(etapa => {
			var edges = [];
			if (etapa.value != '') {
				var steps = etapa.value.split(',');
				steps.forEach(step => { edges.push( {'name': step} ); });
			}
			data.push( {
				'name': etapa.parentElement.querySelector('[name="idx"]').getAttribute('itemIdx'),
				'edges': edges
			});

		});
		if (data.length > 0) {
			var arr = [];
			var resolved = [];
			var ret = this.dep_resolve(data[0], resolved, [], data);
			return ret;
		}
		else return {'status':true}
	}

	updateAllItemIdx() {
		for (var i = 0; i < this.inputformitems.length ; i++) {
			this.inputformitems[i].idx = i + 1;
		};
	}

	updateAllDependencyForLabel(els) {
		var retorno = true;
		els.forEach(e => {
			var r = this.updateDependencyForLabel({'target':e.querySelector(`[name='dependency']`)});
			retorno = retorno && r;
		});
		return retorno;
	}



	updateDependencyForLabel(event) {
		var retorno = true;
		var item = document.querySelector(`[itemIdx="${event.target.value}"]`);
		if (event.target.value == '') {
			var startdate = event.target.parentElement.querySelector('[name="startdate"]');
			startdate.removeAttribute('disabled')
			startdate.style.cursor = 'auto';
			event.target.style.border = null;
		}
		//não pode ser dependente dele mesmo
		else if (event.target.parentElement.querySelector(`[itemIdx="${event.target.value}"]`)) {
			event.target.style.border = '2px solid red';
			alert('O valor de dependência não pode ser a própria etapa.');
			retorno = false;
		}
		else if (!item) {		
			//não pode ser dependente de etapa que não existe
			event.target.style.border = '2px solid red';
			alert('O valor de dependência deve ser igual ao índice de uma etapa.');
			retorno = false;
		}
		else {
			var dependenciaCircular = this.checkDependenciaCircular();
			if (!dependenciaCircular.status) {
				event.target.style.border = '2px solid red';
				alert(dependenciaCircular.message);
				retorno = false;
			}
			else {
				event.target.setAttribute('forItem', item.parentElement.id);
				var startdate = event.target.parentElement.querySelector('[name="startdate"]');
				startdate.setAttribute('disabled', true);
				startdate.style.cursor = 'not-allowed';
				event.target.style.border = null;
			}
		}
		return retorno;
	}

	async updateGraph() {
		return new Promise(async(resolve, reject) => {
			try {

				var form = document.getElementById('form');
				var els = form.querySelectorAll('[types="item"]');
				var data = [];

				var calendar = await this.mountCalendar(els);

				this.updateEndDates(els, calendar.calendar);
				this.updateStartDates(els, calendar.calendar);

				calendar.graphTraces.forEach(el => {
					data.push(this.createTrace(el));
				});

				this.executionCalendar = calendar.calendar;
				this.endEtapasCalendar = calendar.endEtapasCalendar;

				Plotly.react(document.getElementById('tester'), data, this.layout);

				resolve();
			}
			catch(e) {
				console.log('erro no updateGraph');
				console.log(e);
				reject(e);
			}
		});
	}

	updatedDependency(event) {
		let r = this.updateDependencyForLabel(event); 
		if (r) { this.updateGraph() } 
	}
	
	async mountCalendar(els) {
		return new Promise(async(resolve, reject) => {
			try {
				var firstDates = [];
				var buffer = [];
				els.forEach(el => {
					var firstStep = el.querySelector('[name="startdate"]').getAttribute('disabled');
					var startdate;
					if (!firstStep) {
						startdate = el.querySelector('[name="startdate"]').value;
						firstDates.push({'item':el, 'date':startdate, 'milli':moment(startdate, 'DD/MM/YYYY').valueOf()})
					}
					console.log("mounting calendar");
					console.log("itemIdx = " + el.querySelector('[name="idx"]').getAttribute('itemIdx'));
					buffer.push( {
						'etapa': el.querySelector('[name="idx"]').getAttribute('itemIdx'),
						'units': el.querySelector('[name="units"]').value,
						'currunit': el.querySelector('[name="units"]').value,
						'durationperunit': el.querySelector('[name="duration"]').value,
						'currday': el.querySelector('[name="duration"]').value,
						'req': el.querySelector('[name="dependency"]').value,
						'startdate': startdate,
						'startdatemilli': moment(startdate, 'DD/MM/YYYY').valueOf()
					});		
				});
				var etapasOrderedByStartDate;

				if (firstDates.length > 1)
					etapasOrderedByStartDate = firstDates.sort((a, b) => {
						return (a.milli - b.milli);
					});
				else if (firstDates.length == 1)
					etapasOrderedByStartDate = firstDates;
				else
					alert('problema');

				var calendar = [];
				var graphTraces = [];
				var endEtapasCalendar = [];
				calendar = await this.calendar_resolver(calendar, endEtapasCalendar, buffer, etapasOrderedByStartDate, graphTraces);

				resolve(calendar);
			}
			catch(e) {
				console.log('erro no mountCalendar');
				console.log(e);
				reject(e);
			}
		});
	}

	translateBack (value) {
		var idx = this.transTable.map(e=>e[1]).indexOf(value);
		if (idx == -1) 
			return value;
		else
			return this.transTable[idx][0];
	}

	async calendar_resolver(calendar, endEtapasCalendar, buffer, etapasOrderedByStartDate, graphTraces) {

		return new Promise(async(resolve, reject) => {

			try {

				var etapas = [];
				var endedEtapas = [];
				var date;
				if (calendar.length > 0)
					date = calendar[calendar.length - 1].date.clone().add(1, 'days');
				else {
					date = moment(etapasOrderedByStartDate[0].date, "DD/MM/YYYY");
				}

				buffer.forEach(etapa => {
					var finished = true;
					var currday;
					var currunit;
					var start;
					var end;

			// para começar nova unidade, e tem requerimento/dependência de outra, deve verificar se na rodada anterior a dependência finalizou
					var newAuthorized = true;
					if (etapa.req && etapa.req != '') {
						var s = endEtapasCalendar.filter(e => e.etapas.filter(k => k.etapa == etapa.req && k.fim).length > 0);
						var abla = endEtapasCalendar.filter(e => e.etapas.filter(k => k.etapa == etapa.etapa && k.fim).length > 0);

						if (s.length <= abla.length) {
							newAuthorized = false;
						}
					} else {
						var startdatePro = etapa.startdate;
						if(etapa.startdatemilli > date.valueOf())
							newAuthorized = false;
					}
					if (newAuthorized) {			
						if (etapa.currday > 0) { // ainda tem que trabalhar na unidade
							currday = etapa.currday;
							etapa.currday -= 1;

							currunit = etapa.currunit;

							if (etapa.durationperunit == currday)
								start = true;
							else
								start = false;

							if (currday == 1)
								end = true;
							else
								end = false;

							finished = false;
						}
						else { //finalizou unidade na rodada anterior
							if (etapa.currunit > 1) { // vamos para a próxima unidade
								currday = etapa.durationperunit;
								etapa.currday = etapa.durationperunit - 1;
								
								currunit = etapa.currunit - 1;

								etapa.currunit = currunit;

								start = true;
								if (currday == 1)
									end = true;
								else
									end = false;


								finished = false;
							}
							else { // terminou todas unidades.
								finished = true;
							}
						}
					}
					if (!finished && newAuthorized) {
						//data:
						var dt = {
							'unidade': etapa.units - currunit + 1,
							'equipe': 1,
							'etapa': etapa.etapa,
							'dia etapa': etapa.durationperunit - currday + 1,
							'começo': start,
							'fim': end,
							'dia total': calendar.length == 0 ? 1 : calendar[calendar.length - 1]['dia'] + 1,
						};
						etapas.push(dt);

						if (end)
							endedEtapas.push(dt);

						//graph:
						var traceIdx = graphTraces.map(e => e.etapa).indexOf(etapa.etapa);
						var textArray = [];
						Object.keys(dt).forEach(key => textArray.push(this.capitalize(key) + ': ' + this.translateBack(dt[key])));
						if (traceIdx == -1) {
							graphTraces.push({
									'etapa': etapa.etapa,
									'x': [date.format('YYYY-MM-DD')],
									'y': [dt.unidade],
									'text': [textArray.join('<br>')]
							});
						} else {

							graphTraces[traceIdx]['x'].push(date.format('YYYY-MM-DD'));
							graphTraces[traceIdx]['y'].push(dt.unidade);
							graphTraces[traceIdx]['text'].push(textArray.join('<br>'));
						}
					}
				});
				if (graphTraces.length < buffer.length || etapas.length > 0) {
					var calen = {
						'date': date,
						'dia': calendar.length == 0 ? 1 : calendar[calendar.length - 1]['dia'] + 1,
						'etapas': etapas
					};
					calendar.push(calen);
					if (endedEtapas.filter(e => e.fim).length > 0)
						endEtapasCalendar.push(calen);

					if (etapas.length == 0) {
						var temp = etapasOrderedByStartDate.findIndex(e => e.milli > calen.date.valueOf());
						var nextFirstDay = etapasOrderedByStartDate[temp];
						var daysToNextEtapa = moment(nextFirstDay.date, "DD/MM/YYYY").diff(calen.date , 'days');
						if (daysToNextEtapa > 1) {
							var calen = {
								'date': calendar[calendar.length - 1].date.clone().add(daysToNextEtapa - 1 , 'days'),
								'dia': calendar.length + daysToNextEtapa,
								'etapas': []
							};
							calendar.push(calen);
						}
						await this.calendar_resolver(calendar, endEtapasCalendar, buffer, etapasOrderedByStartDate, graphTraces);
						resolve({ calendar, graphTraces});

					} else {
						await this.calendar_resolver(calendar, endEtapasCalendar, buffer, etapasOrderedByStartDate, graphTraces);
						resolve ( { calendar, graphTraces, endEtapasCalendar} );
					}
				}
				else {
					resolve ( { calendar, graphTraces, endEtapasCalendar} );			
				}
			}
			catch(e) {
				console.log('erro no try');
				console.log(e);
				reject(e);
			}
		});	
	}

	capitalize (value) {
	  return value.charAt(0).toUpperCase() + value.slice(1)
	}

	translate (value) {
		var idx = this.transTable.map(e=>e[0]).indexOf(value);
		if (idx == -1) 
			return '';
		else
			return this.transTable[idx][1];
	}

	updateEndDate(el, calendar) {
		var newCalendar = JSON.parse(JSON.stringify(calendar));
		var val = el.querySelector('[name="idx"]').getAttribute('itemIdx');
		var s = newCalendar.map(e=> { e.etapas = e.etapas.filter(k=>k.etapa == val && k.fim); return e});
		s = s.filter(e=>e.etapas.length > 0);
		var datefield = el.querySelector('[name="enddate"]');
		var obj = s[s.length-1];
		datefield.value = moment(obj.date).format('DD/MM/YYYY');
		var dayfield = el.querySelector('[name="endday"]');
		dayfield.value = obj.dia;
	}

	updateEndDates(els, calendar) {
		els.forEach(e => this.updateEndDate(e, calendar));
	}

	updateStartDate(el, calendar) {
		var bol = el.querySelector('[name="startdate"]').getAttribute('disabled');
		if (bol) {
			var newCalendar = JSON.parse(JSON.stringify(calendar));
			var val = el.querySelector('[name="idx"]').getAttribute('itemIdx');
			var s = newCalendar.map(e=> { e.etapas = e.etapas.filter(k=>k.etapa == val && k['começo']); return e});
			s = s.filter(e=>e.etapas.length > 0);
			var datefield = el.querySelector('[name="startdate"]');
			var obj = s[0];
			datefield.value = moment(obj.date).format('DD/MM/YYYY');
		}
	}

	updateStartDates(els, calendar) {
		els.forEach(e => this.updateStartDate(e, calendar));
	}

	fillEndDates(els) {

	}

	createTrace(item) {
		var items = document.querySelectorAll('[name="idx"]');
console.log("creating trace");
console.log("items.length =" + items.length);
		var idx;
		for (var i = 0; i < items.length; i++) {
			if (items[i].getAttribute('itemIdx') == item.etapa) {
				idx = i;
				break;
			}
		}
console.log("idx =" + idx);


		var domObj = items[idx];
		var name = domObj.parentElement.querySelector('[name="name"]').value;
		var color = domObj.parentElement.getAttribute('colors');

		var trace = {
		  x: item['x'],
		  y: item['y'],
		  mode: 'markers+lines',
		  type: "scatter",
		  name,
		  line: {color},
		  text: item['text'],
		  hovertemplate: 'Data: %{x}<br>%{text}'
		};

		return trace;

	}


}

</script>
