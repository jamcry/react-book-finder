(window["webpackJsonpbook-finder"]=window["webpackJsonpbook-finder"]||[]).push([[0],{130:function(e,t,a){e.exports=a(259)},135:function(e,t,a){},136:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},137:function(e,t,a){},257:function(e,t,a){},259:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(31),l=a.n(r),c=(a(135),a(136),a(137),a(20)),s=a(21),i=a(23),m=a(22),h=a(24),d=a(266),u=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={text:""},a.handleChange=function(e){var t=e.target.value;a.setState({text:t})},a.handleSubmit=function(e){e.preventDefault(),a.props.handleSearch(a.state.text)},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"col-md-6 mt-2 mx-auto"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"form-group row"},o.a.createElement(d.a,{size:"huge",action:{icon:"search"},placeholder:"Enter the book info.",onChange:this.handleChange,style:{width:"100%"}}))))}}]),t}(n.Component);a(257);var p=function(e){return o.a.createElement("div",{className:"spinner-border p-2",role:"status"},o.a.createElement("span",{className:"sr-only"},"Loading..."))},b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={loading:!0,dimensions:{},failed:!1},a.checkDimensions=function(e){var t=e.target,n=t.offsetHeight+t.offsetHeight<5;a.setState({loading:!1,dimensions:{height:t.offsetHeight,width:t.offsetWidth},failed:n})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t="";if(this.props.book.isbn)t="isbn/"+this.props.book.isbn[0];else if(this.props.book.oclc){t="oclc/"+this.props.book.oclc}else t="isbn/000000";return e="http://covers.openlibrary.org/b/".concat(t,"-M.jpg"),o.a.createElement(o.a.Fragment,null,this.state.loading&&o.a.createElement(p,null),this.state.failed?o.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Cover not found!"):o.a.createElement("img",{onLoad:this.checkDimensions,onError:function(){return alert("Error loading image!")},src:e,alt:"Cover of ".concat(this.props.book.title_suggest)}))}}]),t}(n.Component),g=a(267),f=a(260),v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={selected:!1},a.handleClick=function(){a.setState({selected:!0})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(g.a.Item,{key:"book-".concat(this.props.bookId)},o.a.createElement(g.a.Content,null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-9"},o.a.createElement(g.a.Header,null,this.props.book.title_suggest),this.props.book.author_name),o.a.createElement("div",{className:"col-md-3 pl ml-auto"},o.a.createElement(f.a,{onClick:this.handleClick,type:"button","data-toggle":"collapse","data-target":"#collapse-book-".concat(this.props.bookId),"aria-expanded":"false","aria-controls":"collapse-book-".concat(this.props.bookId),content:"Find cover",className:"btn-cover"}))),o.a.createElement("div",{className:"collapse",id:"collapse-book-".concat(this.props.bookId)},o.a.createElement("div",{className:"book-cover text-center"},this.state.selected&&o.a.createElement(b,{book:this.props.book})))))}}]),t}(n.Component),E=a(269),k=a(270),w=a(27),O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={numOfBooksShowing:4},a.showMore=function(){a.setState(function(e){return{numOfBooksShowing:e.numOfBooksShowing+4}})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({numOfBooksShowing:4})}},{key:"render",value:function(){console.log(typeof this.props.data);var e=this.props.data&&this.props.data.docs.slice(0,this.state.numOfBooksShowing).map(function(e,t){return o.a.createElement(v,{bookId:t,book:e})}),t=!!e.length,a=t?"book":"warning circle",n=t?"badge-success":"badge-danger";return o.a.createElement("div",{className:"search-results"},o.a.createElement(E.a,{placeholder:!0},o.a.createElement(k.a,{icon:!0},o.a.createElement(w.a,{name:a}),"Found",o.a.createElement("span",{className:"badge badge-pill ".concat(n," mx-1 my-auto")},this.props.data.numFound),'results for "',o.a.createElement("em",null,this.props.searchText),'".'),o.a.createElement(g.a,{celled:!0,size:"big"},e),this.props.data&&this.props.data.numFound>this.state.numOfBooksShowing&&o.a.createElement("button",{className:"btn btn-warning mt-3",onClick:this.showMore},"Show more")))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={data:"",loading:!1,searchText:""},a.handleSearch=function(e){var t=e.split(" ").join("+");a.setState({data:"",loading:!0}),fetch("http://openlibrary.org/search.json?q=".concat(t)).then(function(e){return e.json()}).then(function(t){return a.setState({loading:!1,searchText:e,data:t})})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"jumbotron p-3 bg-light"},o.a.createElement(u,{handleSearch:this.handleSearch})),!this.state.data&&!this.state.loading&&o.a.createElement("div",null,o.a.createElement(k.a,{as:"h1",icon:!0,textAlign:"center"},o.a.createElement(w.a,{name:"book",circular:!0}),o.a.createElement(k.a.Content,null,"Welcome to BookFinder!")),o.a.createElement("p",null,"Enter keywords for your book (title, author, isbn, or else), then click the button.")),this.state.loading&&o.a.createElement(p,null),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-7 m-auto"},this.state.data&&o.a.createElement(O,{data:this.state.data,searchText:this.state.searchText}))))}}]),t}(n.Component);function y(){return o.a.createElement("header",null,o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"},o.a.createElement("a",{className:"navbar-brand",href:"/"},o.a.createElement("span",{role:"img","aria-label":"books"},"\ud83d\udcda")," ","Book Finder"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},o.a.createElement("ul",{className:"navbar-nav mt-2 mt-lg-0 ml-auto"},o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"#"},"Home")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"#"},"Go Top"))))))}var N=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(y,null),o.a.createElement("div",{className:"mt-5 pt-2"},o.a.createElement(j,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(258);l.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[130,1,2]]]);
//# sourceMappingURL=main.ffefa9f4.chunk.js.map