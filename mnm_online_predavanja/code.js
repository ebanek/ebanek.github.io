$(function(){ // on dom ready

var cy1 = cytoscape({
  container: $('#cy1')[0],
  
  boxSelectionEnabled: false,
  autounselectify: true,
  userZoomingEnabled: true,
  autoungrabify: true,
  
  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'content': 'data(name)',
        'text-valign': 'center',
        'text-halign': 'center',
        'color': 'black',
        'text-outline-width': 0,
        'text-outline-color': 'black',
        'background-color': '#ffc966',
        'width': 80
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black',
        'text-outline-color': 'black'
      })
    .selector('edge')
      .css({
        'width': 1,
        'target-arrow-shape': 'triangle',
        'target-arrow-color': '#afafaf',
        'curve-style': 'bezier',
        'line-color': '#afafaf'
      }), 
  elements: {
    nodes: [
      { data: { id: 'djel', name: 'Djeljivost', href: 'http://mnm.hr/wp-content/uploads/2015/10/djeljivosti.pdf' } },
      { data: { id: 'vjer', name: 'Vjerojatnost', href: 'http://mnm.hr/wp-content/uploads/2015/10/vjerojatnost.pdf' } },
      { data: { id: 'dokaz', name: 'Što je dokaz?', href: 'http://mnm.hr/wp-content/uploads/2015/10/sto_je_dokaz.pdf' } },
      { data: { id: 'inve', name: 'Invarijante', href: 'http://mnm.hr/wp-content/uploads/2015/10/invarijante.pdf' } },
      { data: { id: 'boja', name: 'Bojanja i popločavanja', href: 'http://mnm.hr/wp-content/uploads/2015/10/Bojanja_i_poplocavanja.pdf' } },
      { data: { id: 'kong', name: 'Kongruencije', href: 'http://mnm.hr/wp-content/uploads/2015/10/kongruencije.pdf' } },
      { data: { id: 'algiz', name: 'Algebarski izrazi', href: 'http://mnm.hr/wp-content/uploads/2015/10/algebarski_izrazi.pdf' } },
      { data: { id: 'dirich', name: 'Dirichletov princip', href: 'http://mnm.hr/wp-content/uploads/2015/10/dirichlet.pdf' } },
      { data: { id: 'suksi', name: 'Sukladnost i sličnost', href: 'http://mnm.hr/wp-content/uploads/2015/10/sukladnost_i_slicnost.pdf' } },
      { data: { id: 'indu', name: 'Matematička indukcija', href: 'http://mnm.hr/wp-content/uploads/2015/11/matematicka_indukcija.pdf' } },
      { data: { id: 'kara', name: 'Kar. točke trokuta', href: 'http://mnm.hr/wp-content/uploads/2015/10/karakteristicne_tocke_trokuta.pdf' } },
      { data: { id: 'kagh', name: 'Uvod u nejednakosti', href: 'http://mnm.hr/wp-content/uploads/2015/10/uvod_u_nejednakosti.pdf' } },
      { data: { id: 'prost', name: 'Prosti brojevi', href: 'http://mnm.hr/wp-content/uploads/2015/10/prosti_brojevi.pdf' } },
      { data: { id: 'relprost', name: 'Relativno prosti br.', href: 'http://mnm.hr/wp-content/uploads/2016/11/relativno_prosti_brojevi.pdf' } },
      { data: { id: 'povrs', name: 'Površine u geometriji', href: 'http://mnm.hr/wp-content/uploads/2015/10/povrsine_u_geometriji.pdf' } },
      { data: { id: 'jednbe', name: 'Jednadžbe i sustavi', href: 'http://mnm.hr/wp-content/uploads/2015/10/jednadzbe_i_sustavi.pdf' } },
      { data: { id: 'ferma', name: 'Mali Fermatov i Eulerov tm.', href: 'http://mnm.hr/wp-content/uploads/2015/10/mali_fermat_i_euler.pdf' } },
      { data: { id: 'tetiv', name: 'Tetivni četverokuti', href: 'http://mnm.hr/wp-content/uploads/2016/02/tetivni_cetverokut.pdf' } },
      { data: { id: 'simpol', name: 'Sim. polinomi i Vieteove', href: 'http://mnm.hr/wp-content/uploads/2015/10/Simetricni_polinomi_i_Vieteove_formule.pdf' } },
      { data: { id: 'kombgeo', name: 'Uvod u komb. geometriju', href: 'http://mnm.hr/wp-content/uploads/2016/03/kombinatorna_geometrija_uvod.pdf' } },
      { data: { id: 'pell', name: 'Pellova jednadžba', href: 'http://mnm.hr/wp-content/uploads/2016/03/pellova_jednadzba.pdf' } },
      { data: { id: 'csb', name: 'CSB nejednakost', href: 'http://mnm.hr/wp-content/uploads/2015/10/csb_nejednakost.pdf' } },
      { data: { id: 'pottocke', name: 'Potencija točke i radikalna os', href: 'http://mnm.hr/wp-content/uploads/2016/03/potencija_tocke.pdf' } },
      { data: { id: 'feuerbach', name: 'Kružnica 9 točaka', href: 'http://mnm.hr/wp-content/uploads/2016/10/Feuerbachova_kruznica.pdf' } },
      { data: { id: 'ekstrem', name: 'Princip ekstrema', href: 'http://mnm.hr/wp-content/uploads/2016/10/Princip_ekstrema.pdf' } },
      { data: { id: 'nindu', name: 'Napredna indukcija', href: 'http://mnm.hr/wp-content/uploads/2016/10/Napredna_indukcija.pdf' } },
      { data: { id: 'opc2016', name: 'Simul. opć. natj. 2016', href: 'http://mnm.hr/wp-content/uploads/2016/01/simulacija_opcinskog.pdf' } },
      { data: { id: 'zup2016', name: 'Simul. žup. natj. 2016', href: 'http://mnm.hr/wp-content/uploads/2015/10/simulacija_zupanijskog.pdf' } },
      { data: { id: 'drz2016', name: 'Simul. drž. natj. 2016', href: 'http://mnm.hr/wp-content/uploads/2015/10/simulacija_drzavnog.pdf' } }
      { data: { id: 'pravokut', name: 'Pravokutni trokuti', href: 'http://mnm.hr/wp-content/uploads/2016/11/Pravokutni_trokuti.pdf' } }
    ],
    edges: [
      { data: { target: 'pravokut', source: 'suksi' } },
      { data: { target: 'kong', source: 'djel' } },
      { data: { target: 'indu', source: 'algiz' } },
      { data: { target: 'kara', source: 'suksi' } },
      { data: { target: 'kagh', source: 'algiz' } },
      { data: { target: 'prost', source: 'kong' } },
      { data: { target: 'povrs', source: 'suksi' } },
      { data: { target: 'jednbe', source: 'kagh' } },
      { data: { target: 'ferma', source: 'kong' } },
      { data: { target: 'tetiv', source: 'kara' } },
      { data: { target: 'simpol', source: 'jednbe' } },
      { data: { target: 'kombgeo', source: 'dirich' } },
      { data: { target: 'kombgeo', source: 'kara' } },
      { data: { target: 'pell', source: 'kong' } },
      { data: { target: 'pell', source: 'algiz' } },
      { data: { target: 'csb', source: 'kagh' } },
      { data: { target: 'pottocke', source: 'tetiv' } },
      { data: { target: 'ekstrem', source: 'dirich' } },
      { data: { target: 'ekstrem', source: 'dokaz' } },
      { data: { target: 'feuerbach', source: 'tetiv' } },
      { data: { target: 'nindu', source: 'indu' } },
      { data: { source: 'opc2016', target: 'zup2016' } },
      { data: { source: 'zup2016', target: 'drz2016' } },
      { data: { source: 'prost', target: 'relprost' } },
    ]
  },
  
  layout: {
    name: 'dagre',
    rankDir: 'LR',
    padding: 0,
    rankSep: 30
  }
});
  
cy1.on('tap', 'node', function(){
  try { // your browser may block popups
    window.open( this.data('href') );
  } catch(e){ // fall back on url change
    window.location.href = this.data('href'); 
  } 
});

}); // on dom ready
