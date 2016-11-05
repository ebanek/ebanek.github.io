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
        'color': 'black',
        'text-outline-width': 0,
        'text-outline-color': 'black',
        'background-color': '#ffc966'
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
        'width': 4,
        'target-arrow-shape': 'triangle',
        'curve-style': 'bezier'
      }), 
  elements: {
    nodes: [
      { data: { id: 'djel', name: 'Djeljivost', href: 'https://mnm.hr/wp-content/uploads/2015/10/djeljivosti.pdf' } },
      { data: { id: 'vjer', name: 'Vjerojatnost', href: 'https://mnm.hr/wp-content/uploads/2015/10/vjerojatnost.pdf' } },
      { data: { id: 'dokaz', name: 'Što je dokaz?', href: 'https://mnm.hr/wp-content/uploads/2015/10/sto_je_dokaz.pdf' } },
      { data: { id: 'inve', name: 'Invarijante', href: 'https://mnm.hr/wp-content/uploads/2015/10/invarijante.pdf' } },
      { data: { id: 'boja', name: 'Bojanja i popločavanja', href: 'https://mnm.hr/wp-content/uploads/2015/10/Bojanja_i_poplocavanja.pdf' } },
      { data: { id: 'kong', name: 'Kongruencije', href: 'https://mnm.hr/wp-content/uploads/2015/10/kongruencije.pdf' } },
      { data: { id: 'algiz', name: 'Algebarski izrazi', href: 'https://mnm.hr/wp-content/uploads/2015/10/algebarski_izrazi.pdf' } },
      { data: { id: 'dirich', name: 'Dirichletov princip', href: 'https://mnm.hr/wp-content/uploads/2015/10/dirichlet.pdf' } },
      { data: { id: 'suksi', name: 'Sukladnost i sličnost', href: 'https://mnm.hr/wp-content/uploads/2015/10/sukladnost_i_slicnost.pdf' } },
      { data: { id: 'indu', name: 'Matematička indukcija', href: 'https://mnm.hr/wp-content/uploads/2015/11/matematicka_indukcija.pdf' } },
      { data: { id: 'kara', name: 'Karakteristične točke trokuta', href: 'https://mnm.hr/wp-content/uploads/2015/10/karakteristicne_tocke_trokuta.pdf' } },
      { data: { id: 'kagh', name: 'Uvod u nejednakosti (KAGH)', href: 'https://mnm.hr/wp-content/uploads/2015/10/uvod_u_nejednakosti.pdf' } },
      { data: { id: 'prost', name: 'Prosti brojevi', href: 'https://mnm.hr/wp-content/uploads/2015/10/prosti_brojevi.pdf' } },
      { data: { id: 'povrs', name: 'Površine u geometriji', href: 'https://mnm.hr/wp-content/uploads/2015/10/povrsine_u_geometriji.pdf' } },
      { data: { id: 'jednbe', name: 'Jednadžbe i sustavi jednadžbi', href: 'https://mnm.hr/wp-content/uploads/2015/10/jednadzbe_i_sustavi.pdf' } },
      { data: { id: 'ferma', name: 'Mali Fermatov i Eulerov teorem', href: 'https://mnm.hr/wp-content/uploads/2015/10/mali_fermat_i_euler.pdf' } },
      { data: { id: 'tetiv', name: 'Tetivni četverokuti', href: 'https://mnm.hr/wp-content/uploads/2016/02/tetivni_cetverokut.pdf' } },
      { data: { id: 'simpol', name: 'Simetrični polinomi i Vieteove formule', href: 'https://mnm.hr/wp-content/uploads/2015/10/Simetricni_polinomi_i_Vieteove_formule.pdf' } },
      { data: { id: 'kombgeo', name: 'Uvod u kombinatornu geometriju', href: 'https://mnm.hr/wp-content/uploads/2016/03/kombinatorna_geometrija_uvod.pdf' } },
      { data: { id: 'pell', name: 'Pellova jednadžba', href: 'https://mnm.hr/wp-content/uploads/2016/03/pellova_jednadzba.pdf' } },
      { data: { id: 'csb', name: 'CSB nejednakost', href: 'https://mnm.hr/wp-content/uploads/2015/10/csb_nejednakost.pdf' } },
      { data: { id: 'pottocke', name: 'Potencija točke i radikalna os', href: 'https://mnm.hr/wp-content/uploads/2016/03/potencija_tocke.pdf' } },
      { data: { id: 'feuerbach', name: 'Kružnica 9 točaka (Feuerbachova)', href: 'https://mnm.hr/wp-content/uploads/2016/10/Feuerbachova_kruznica.pdf' } },
      { data: { id: 'ekstrem', name: 'Princip ekstrema', href: 'https://mnm.hr/wp-content/uploads/2016/10/Princip_ekstrema.pdf' } },
      { data: { id: 'nindu', name: 'Napredna indukcija', href: 'https://mnm.hr/wp-content/uploads/2016/10/Napredna_indukcija.pdf' } }
    ],
    edges: [
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
    ]
  },
  
  layout: {
    name: 'dagre',
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
