/*
 *  /MathJax/jax/element/mml/jax.js
 *  
 *  Copyright (c) 2012 Design Science, Inc.
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

MathJax.ElementJax.mml=MathJax.ElementJax({mimeType:"jax/mml"},{id:"mml",version:"2.1.1",directory:MathJax.ElementJax.directory+"/mml",extensionDir:MathJax.ElementJax.extensionDir+"/mml",optableDir:MathJax.ElementJax.directory+"/mml/optable"});MathJax.ElementJax.mml.Augment({Init:function(){if(arguments.length===1&&arguments[0].type==="math"){this.root=arguments[0]}else{this.root=MathJax.ElementJax.mml.math.apply(this,arguments)}if(this.root.attr&&this.root.attr.mode){if(!this.root.display&&this.root.attr.mode==="display"){this.root.display="block";this.root.attrNames.push("display")}delete this.root.attr.mode;for(var b=0,a=this.root.attrNames.length;b<a;b++){if(this.root.attrNames[b]==="mode"){this.root.attrNames.splice(b,1);break}}}}},{INHERIT:"_inherit_",AUTO:"_auto_",SIZE:{INFINITY:"infinity",SMALL:"small",NORMAL:"normal",BIG:"big"},COLOR:{TRANSPARENT:"transparent"},VARIANT:{NORMAL:"normal",BOLD:"bold",ITALIC:"italic",BOLDITALIC:"bold-italic",DOUBLESTRUCK:"double-struck",FRAKTUR:"fraktur",BOLDFRAKTUR:"bold-fraktur",SCRIPT:"script",BOLDSCRIPT:"bold-script",SANSSERIF:"sans-serif",BOLDSANSSERIF:"bold-sans-serif",SANSSERIFITALIC:"sans-serif-italic",SANSSERIFBOLDITALIC:"sans-serif-bold-italic",MONOSPACE:"monospace",INITIAL:"inital",TAILED:"tailed",LOOPED:"looped",STRETCHED:"stretched",CALIGRAPHIC:"-tex-caligraphic",OLDSTYLE:"-tex-oldstyle"},FORM:{PREFIX:"prefix",INFIX:"infix",POSTFIX:"postfix"},LINEBREAK:{AUTO:"auto",NEWLINE:"newline",NOBREAK:"nobreak",GOODBREAK:"goodbreak",BADBREAK:"badbreak"},LINEBREAKSTYLE:{BEFORE:"before",AFTER:"after",DUPLICATE:"duplicate",INFIXLINBREAKSTYLE:"infixlinebreakstyle"},INDENTALIGN:{LEFT:"left",CENTER:"center",RIGHT:"right",AUTO:"auto",ID:"id",INDENTALIGN:"indentalign"},INDENTSHIFT:{INDENTSHIFT:"indentshift"},LINETHICKNESS:{THIN:"thin",MEDIUM:"medium",THICK:"thick"},NOTATION:{LONGDIV:"longdiv",ACTUARIAL:"actuarial",RADICAL:"radical",BOX:"box",ROUNDEDBOX:"roundedbox",CIRCLE:"circle",LEFT:"left",RIGHT:"right",TOP:"top",BOTTOM:"bottom",UPDIAGONALSTRIKE:"updiagonalstrike",DOWNDIAGONALSTRIKE:"downdiagonalstrike",VERTICALSTRIKE:"verticalstrike",HORIZONTALSTRIKE:"horizontalstrike",MADRUWB:"madruwb"},ALIGN:{TOP:"top",BOTTOM:"bottom",CENTER:"center",BASELINE:"baseline",AXIS:"axis",LEFT:"left",RIGHT:"right"},LINES:{NONE:"none",SOLID:"solid",DASHED:"dashed"},SIDE:{LEFT:"left",RIGHT:"right",LEFTOVERLAP:"leftoverlap",RIGHTOVERLAP:"rightoverlap"},WIDTH:{AUTO:"auto",FIT:"fit"},ACTIONTYPE:{TOGGLE:"toggle",STATUSLINE:"statusline",TOOLTIP:"tooltip",INPUT:"input"},LENGTH:{VERYVERYTHINMATHSPACE:"veryverythinmathspace",VERYTHINMATHSPACE:"verythinmathspace",THINMATHSPACE:"thinmathspace",MEDIUMMATHSPACE:"mediummathspace",THICKMATHSPACE:"thickmathspace",VERYTHICKMATHSPACE:"verythickmathspace",VERYVERYTHICKMATHSPACE:"veryverythickmathspace",NEGATIVEVERYVERYTHINMATHSPACE:"negativeveryverythinmathspace",NEGATIVEVERYTHINMATHSPACE:"negativeverythinmathspace",NEGATIVETHINMATHSPACE:"negativethinmathspace",NEGATIVEMEDIUMMATHSPACE:"negativemediummathspace",NEGATIVETHICKMATHSPACE:"negativethickmathspace",NEGATIVEVERYTHICKMATHSPACE:"negativeverythickmathspace",NEGATIVEVERYVERYTHICKMATHSPACE:"negativeveryverythickmathspace"},OVERFLOW:{LINBREAK:"linebreak",SCROLL:"scroll",ELIDE:"elide",TRUNCATE:"truncate",SCALE:"scale"},UNIT:{EM:"em",EX:"ex",PX:"px",IN:"in",CM:"cm",MM:"mm",PT:"pt",PC:"pc"},TEXCLASS:{ORD:0,OP:1,BIN:2,REL:3,OPEN:4,CLOSE:5,PUNCT:6,INNER:7,VCENTER:8,NONE:-1},TEXCLASSNAMES:["ORD","OP","BIN","REL","OPEN","CLOSE","PUNCT","INNER","VCENTER"],copyAttributes:{fontfamily:true,fontsize:true,fontweight:true,fontstyle:true,color:true,background:true,id:true,"class":true,href:true,style:true},skipAttributes:{texClass:true,useHeight:true,texprimestyle:true},copyAttributeNames:["fontfamily","fontsize","fontweight","fontstyle","color","background","id","class","href","style"]});(function(a){a.mbase=MathJax.Object.Subclass({type:"base",isToken:false,defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT},noInherit:{},noInheritAttribute:{texClass:true},linebreakContainer:false,Init:function(){this.data=[];if(this.inferRow&&!(arguments.length===1&&arguments[0].inferred)){this.Append(a.mrow().With({inferred:true}))}this.Append.apply(this,arguments)},With:function(d){for(var e in d){if(d.hasOwnProperty(e)){this[e]=d[e]}}return this},Append:function(){if(this.inferRow&&this.data.length){this.data[0].Append.apply(this.data[0],arguments)}else{for(var e=0,d=arguments.length;e<d;e++){this.SetData(this.data.length,arguments[e])}}},SetData:function(d,e){if(e!=null){if(!(e instanceof a.mbase)){e=(this.isToken?a.chars(e):a.mtext(e))}e.parent=this;e.setInherit(this.inheritFromMe?this:this.inherit)}this.data[d]=e},Parent:function(){var d=this.parent;while(d&&d.inferred){d=d.parent}return d},Get:function(e,j){if(this[e]!=null){return this[e]}if(this.attr&&this.attr[e]!=null){return this.attr[e]}var f=this.Parent();if(f&&f["adjustChild_"+e]!=null){return(f["adjustChild_"+e])(f.childPosition(this))}var i=this.inherit;var d=i;while(i){var h=i[e];if(h==null&&i.attr){h=i.attr[e]}if(h!=null&&!i.noInheritAttribute[e]){var g=i.noInherit[this.type];if(!(g&&g[e])){return h}}d=i;i=i.inherit}if(!j){if(this.defaults[e]===a.AUTO){return this.autoDefault(e)}if(this.defaults[e]!==a.INHERIT&&this.defaults[e]!=null){return this.defaults[e]}if(d){return d.defaults[e]}}return null},hasValue:function(d){return(this.Get(d,true)!=null)},getValues:function(){var e={};for(var f=0,d=arguments.length;f<d;f++){e[arguments[f]]=this.Get(arguments[f])}return e},adjustChild_scriptlevel:function(d){return this.Get("scriptlevel")},adjustChild_displaystyle:function(d){return this.Get("displaystyle")},adjustChild_texprimestyle:function(d){return this.Get("texprimestyle")},childPosition:function(f){if(f.parent.inferred){f=f.parent}for(var e=0,d=this.data.length;e<d;e++){if(this.data[e]===f){return e}}return null},setInherit:function(f){if(f!==this.inherit&&this.inherit==null){this.inherit=f;for(var e=0,d=this.data.length;e<d;e++){if(this.data[e]&&this.data[e].setInherit){this.data[e].setInherit(f)}}}},setTeXclass:function(d){this.getPrevClass(d);return(typeof(this.texClass)!=="undefined"?this:d)},getPrevClass:function(d){if(d){this.prevClass=d.Get("texClass");this.prevLevel=d.Get("scriptlevel")}},updateTeXclass:function(d){if(d){this.prevClass=d.prevClass;delete d.prevClass;this.prevLevel=d.prevLevel;delete d.prevLevel;this.texClass=d.Get("texClass")}},texSpacing:function(){var e=(this.prevClass!=null?this.prevClass:a.TEXCLASS.NONE);var d=(this.Get("texClass")||a.TEXCLASS.ORD);if(e===a.TEXCLASS.NONE||d===a.TEXCLASS.NONE){return""}if(e===a.TEXCLASS.VCENTER){e=a.TEXCLASS.ORD}if(d===a.TEXCLASS.VCENTER){d=a.TEXCLASS.ORD}var f=this.TEXSPACE[e][d];if(this.prevLevel>0&&this.Get("scriptlevel")>0&&f>=0){return""}return this.TEXSPACELENGTH[Math.abs(f)]},TEXSPACELENGTH:["",a.LENGTH.THINMATHSPACE,a.LENGTH.MEDIUMMATHSPACE,a.LENGTH.THICKMATHSPACE],TEXSPACE:[[0,-1,2,3,0,0,0,1],[-1,-1,0,3,0,0,0,1],[2,2,0,0,2,0,0,2],[3,3,0,0,3,0,0,3],[0,0,0,0,0,0,0,0],[0,-1,2,3,0,0,0,1],[1,1,0,1,1,1,1,1],[1,-1,2,3,1,0,1,1]],autoDefault:function(d){return""},isSpacelike:function(){return false},isEmbellished:function(){return false},Core:function(){return this},CoreMO:function(){return this},hasNewline:function(){if(this.isEmbellished()){return this.CoreMO().hasNewline()}if(this.isToken||this.linebreakContainer){return false}for(var e=0,d=this.data.length;e<d;e++){if(this.data[e]&&this.data[e].hasNewline()){return true}}return false},array:function(){if(this.inferred){return this.data}else{return[this]}},toString:function(){return this.type+"("+this.data.join(",")+")"}},{childrenSpacelike:function(){for(var e=0,d=this.data.length;e<d;e++){if(!this.data[e].isSpacelike()){return false}}return true},childEmbellished:function(){return(this.data[0]&&this.data[0].isEmbellished())},childCore:function(){return this.data[0]},childCoreMO:function(){return(this.data[0]?this.data[0].CoreMO():null)},setChildTeXclass:function(d){if(this.data[0]){d=this.data[0].setTeXclass(d);this.updateTeXclass(this.data[0])}return d},setBaseTeXclasses:function(f){this.getPrevClass(f);this.texClass=null;if(this.data[0]){if(this.isEmbellished()||this.data[0].isa(a.mi)){f=this.data[0].setTeXclass(f);this.updateTeXclass(this.Core())}else{this.data[0].setTeXclass();f=this}}else{f=this}for(var e=1,d=this.data.length;e<d;e++){if(this.data[e]){this.data[e].setTeXclass()}}return f},setSeparateTeXclasses:function(f){this.getPrevClass(f);for(var e=0,d=this.data.length;e<d;e++){if(this.data[e]){this.data[e].setTeXclass()}}if(this.isEmbellished()){this.updateTeXclass(this.Core())}return this}});a.mi=a.mbase.Subclass({type:"mi",isToken:true,texClass:a.TEXCLASS.ORD,defaults:{mathvariant:a.AUTO,mathsize:a.INHERIT,mathbackground:a.INHERIT,mathcolor:a.INHERIT},autoDefault:function(e){if(e==="mathvariant"){var d=(this.data[0]||"").toString();return(d.length===1||(d.length===2&&d.charCodeAt(0)>=55296&&d.charCodeAt(0)<56320)?a.VARIANT.ITALIC:a.VARIANT.NORMAL)}return""},setTeXclass:function(e){this.getPrevClass(e);var d=this.data.join("");if(d.length>1&&d.match(/^[a-z][a-z0-9]*$/i)&&this.texClass===a.TEXCLASS.ORD){this.texClass=a.TEXCLASS.OP;this.autoOP=true}return this}});a.mn=a.mbase.Subclass({type:"mn",isToken:true,texClass:a.TEXCLASS.ORD,defaults:{mathvariant:a.INHERIT,mathsize:a.INHERIT,mathbackground:a.INHERIT,mathcolor:a.INHERIT}});a.mo=a.mbase.Subclass({type:"mo",isToken:true,defaults:{mathvariant:a.INHERIT,mathsize:a.INHERIT,mathbackground:a.INHERIT,mathcolor:a.INHERIT,form:a.AUTO,fence:a.AUTO,separator:a.AUTO,lspace:a.AUTO,rspace:a.AUTO,stretchy:a.AUTO,symmetric:a.AUTO,maxsize:a.AUTO,minsize:a.AUTO,largeop:a.AUTO,movablelimits:a.AUTO,accent:a.AUTO,linebreak:a.LINEBREAK.AUTO,lineleading:a.INHERIT,linebreakstyle:a.AUTO,linebreakmultchar:a.INHERIT,indentalign:a.INHERIT,indentshift:a.INHERIT,indenttarget:a.INHERIT,indentalignfirst:a.INHERIT,indentshiftfirst:a.INHERIT,indentalignlast:a.INHERIT,indentshiftlast:a.INHERIT,texClass:a.AUTO},defaultDef:{form:a.FORM.INFIX,fence:false,separator:false,lspace:a.LENGTH.THICKMATHSPACE,rspace:a.LENGTH.THICKMATHSPACE,stretchy:false,symmetric:true,maxsize:a.SIZE.INFINITY,minsize:"0em",largeop:false,movablelimits:false,accent:false,linebreak:a.LINEBREAK.AUTO,lineleading:"1ex",linebreakstyle:"before",indentalign:a.INDENTALIGN.AUTO,indentshift:"0",indenttarget:"",indentalignfirst:a.INDENTALIGN.INDENTALIGN,indentshiftfirst:a.INDENTSHIFT.INDENTSHIFT,indentalignlast:a.INDENTALIGN.INDENTALIGN,indentshiftlast:a.INDENTSHIFT.INDENTSHIFT,texClass:a.TEXCLASS.REL},SPACE_ATTR:{lspace:1,rspace:2,form:4},useMMLspacing:7,autoDefault:function(f,l){var k=this.def;if(!k){if(f==="form"){this.useMMLspacing&=~this.SPACE_ATTR.form;return this.getForm()}var j=this.data.join("");var e=[this.Get("form"),a.FORM.INFIX,a.FORM.POSTFIX,a.FORM.PREFIX];for(var g=0,d=e.length;g<d;g++){var h=this.OPTABLE[e[g]][j];if(h){k=this.makeDef(h);break}}if(!k){k=this.CheckRange(j)}if(!k&&l){k={}}else{if(!k){k=MathJax.Hub.Insert({},this.defaultDef)}k.form=e[0];this.def=k}}this.useMMLspacing&=~(this.SPACE_ATTR[f]||0);if(k[f]!=null){return k[f]}else{if(!l){return this.defaultDef[f]}}return""},CheckRange:function(h){var j=h.charCodeAt(0);if(j>=55296&&j<56320){j=(((j-55296)<<10)+(h.charCodeAt(1)-56320))+65536}for(var f=0,d=this.RANGES.length;f<d&&this.RANGES[f][0]<=j;f++){if(j<=this.RANGES[f][1]){if(this.RANGES[f][3]){var e=a.optableDir+"/"+this.RANGES[f][3]+".js";this.RANGES[f][3]=null;MathJax.Hub.RestartAfter(MathJax.Ajax.Require(e))}var g=a.TEXCLASSNAMES[this.RANGES[f][2]];g=this.OPTABLE.infix[h]=a.mo.OPTYPES[g==="BIN"?"BIN3":g];return this.makeDef(g)}}return null},makeDef:function(e){if(e[2]==null){e[2]=this.defaultDef.texClass}if(!e[3]){e[3]={}}var d=MathJax.Hub.Insert({},e[3]);d.lspace=this.SPACE[e[0]];d.rspace=this.SPACE[e[1]];d.texClass=e[2];if(d.texClass===a.TEXCLASS.REL&&(this.movablelimits||this.data.join("").match(/^[a-z]+$/i))){d.texClass=a.TEXCLASS.OP}return d},getForm:function(){var d=this,f=this.parent,e=this.Parent();while(e&&e.isEmbellished()){d=f;f=e.parent;e=e.Parent()}if(f&&f.type==="mrow"&&f.NonSpaceLength()!==1){if(f.FirstNonSpace()===d){return a.FORM.PREFIX}if(f.LastNonSpace()===d){return a.FORM.POSTFIX}}return a.FORM.INFIX},isEmbellished:function(){return true},hasNewline:function(){return(this.Get("linebreak")===a.LINEBREAK.NEWLINE)},setTeXclass:function(d){this.getValues("lspace","rspace");if(this.useMMLspacing){this.texClass=a.TEXCLASS.NONE;return this}this.texClass=this.Get("texClass");if(this.data.join("")==="\u2061"){if(d){d.texClass=a.TEXCLASS.OP}this.texClass=this.prevClass=a.TEXCLASS.NONE;return d}return this.adjustTeXclass(d)},adjustTeXclass:function(d){if(this.texClass===a.TEXCLASS.NONE){return d}if(d){if(d.autoOP&&(this.texClass===a.TEXCLASS.BIN||this.texClass===a.TEXCLASS.REL)){d.texClass=a.TEXCLASS.ORD}this.prevClass=d.texClass||a.TEXCLASS.ORD;this.prevLevel=d.Get("scriptlevel")}else{this.prevClass=a.TEXCLASS.NONE}if(this.texClass===a.TEXCLASS.BIN&&(this.prevClass===a.TEXCLASS.NONE||this.prevClass===a.TEXCLASS.BIN||this.prevClass===a.TEXCLASS.OP||this.prevClass===a.TEXCLASS.REL||this.prevClass===a.TEXCLASS.OPEN||this.prevClass===a.TEXCLASS.PUNCT)){this.texClass=a.TEXCLASS.ORD}else{if(this.prevClass===a.TEXCLASS.BIN&&(this.texClass===a.TEXCLASS.REL||this.texClass===a.TEXCLASS.CLOSE||this.texClass===a.TEXCLASS.PUNCT)){d.texClass=this.prevClass=a.TEXCLASS.ORD}}return this}});a.mtext=a.mbase.Subclass({type:"mtext",isToken:true,isSpacelike:function(){return true},texClass:a.TEXCLASS.ORD,defaults:{mathvariant:a.INHERIT,mathsize:a.INHERIT,mathbackground:a.INHERIT,mathcolor:a.INHERIT}});a.mspace=a.mbase.Subclass({type:"mspace",isToken:true,isSpacelike:function(){return true},defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT,width:"0em",height:"0ex",depth:"0ex",linebreak:a.LINEBREAK.AUTO},hasDimAttr:function(){return(this.hasValue("width")||this.hasValue("height")||this.hasValue("depth"))},hasNewline:function(){return(!this.hasDimAttr()&&this.Get("linebreak")===a.LINEBREAK.NEWLINE)}});a.ms=a.mbase.Subclass({type:"ms",isToken:true,texClass:a.TEXCLASS.ORD,defaults:{mathvariant:a.INHERIT,mathsize:a.INHERIT,mathbackground:a.INHERIT,mathcolor:a.INHERIT,lquote:'"',rquote:'"'}});a.mglyph=a.mbase.Subclass({type:"mglyph",isToken:true,texClass:a.TEXCLASS.ORD,defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT,alt:"",src:"",width:a.AUTO,height:a.AUTO,valign:"0em"}});a.mrow=a.mbase.Subclass({type:"mrow",isSpacelike:a.mbase.childrenSpacelike,inferred:false,isEmbellished:function(){var e=false;for(var f=0,d=this.data.length;f<d;f++){if(this.data[f]==null){continue}if(this.data[f].isEmbellished()){if(e){return false}e=true;this.core=f}else{if(!this.data[f].isSpacelike()){return false}}}return e},NonSpaceLength:function(){var f=0;for(var e=0,d=this.data.length;e<d;e++){if(this.data[e]&&!this.data[e].isSpacelike()){f++}}return f},FirstNonSpace:function(){for(var e=0,d=this.data.length;e<d;e++){if(this.data[e]&&!this.data[e].isSpacelike()){return this.data[e]}}return null},LastNonSpace:function(){for(var d=this.data.length-1;d>=0;d--){if(this.data[0]&&!this.data[d].isSpacelike()){return this.data[d]}}return null},Core:function(){if(!(this.isEmbellished())||typeof(this.core)==="undefined"){return this}return this.data[this.core]},CoreMO:function(){if(!(this.isEmbellished())||typeof(this.core)==="undefined"){return this}return this.data[this.core].CoreMO()},toString:function(){if(this.inferred){return"["+this.data.join(",")+"]"}return this.SUPER(arguments).toString.call(this)},setTeXclass:function(f){for(var e=0,d=this.data.length;e<d;e++){if(this.data[e]){f=this.data[e].setTeXclass(f)}}if(this.data[0]){this.updateTeXclass(this.data[0])}return f}});a.mfrac=a.mbase.Subclass({type:"mfrac",num:0,den:1,linebreakContainer:true,texClass:a.TEXCLASS.INNER,isEmbellished:a.mbase.childEmbellished,Core:a.mbase.childCore,CoreMO:a.mbase.childCoreMO,defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT,linethickness:a.LINETHICKNESS.MEDIUM,numalign:a.ALIGN.CENTER,denomalign:a.ALIGN.CENTER,bevelled:false},adjustChild_displaystyle:function(d){return false},adjustChild_scriptlevel:function(e){var d=this.Get("scriptlevel");if(!this.Get("displaystyle")||d>0){d++}return d},adjustChild_texprimestyle:function(d){if(d==this.den){return true}return this.Get("texprimestyle")},setTeXclass:a.mbase.setSeparateTeXclasses});a.msqrt=a.mbase.Subclass({type:"msqrt",inferRow:true,linebreakContainer:true,texClass:a.TEXCLASS.ORD,setTeXclass:a.mbase.setSeparateTeXclasses,adjustChild_texprimestyle:function(d){return true}});a.mroot=a.mbase.Subclass({type:"mroot",linebreakContainer:true,texClass:a.TEXCLASS.ORD,adjustChild_displaystyle:function(d){if(d===1){return false}return this.Get("displaystyle")},adjustChild_scriptlevel:function(e){var d=this.Get("scriptlevel");if(e===1){d+=2}return d},adjustChild_texprimestyle:function(d){if(d===0){return true}return this.Get("texprimestyle")},setTeXclass:a.mbase.setSeparateTeXclasses});a.mstyle=a.mbase.Subclass({type:"mstyle",isSpacelike:a.mbase.childrenSpacelike,isEmbellished:a.mbase.childEmbellished,Core:a.mbase.childCore,CoreMO:a.mbase.childCoreMO,inferRow:true,defaults:{scriptlevel:a.INHERIT,displaystyle:a.INHERIT,scriptsizemultiplier:Math.sqrt(1/2),scriptminsize:"8pt",mathbackground:a.INHERIT,mathcolor:a.INHERIT,infixlinebreakstyle:a.LINEBREAKSTYLE.BEFORE,decimalseparator:"."},adjustChild_scriptlevel:function(f){var e=this.scriptlevel;if(e==null){e=this.Get("scriptlevel")}else{if(String(e).match(/^ *[-+]/)){delete this.scriptlevel;var d=this.Get("scriptlevel");this.scriptlevel=e;e=d+parseInt(e)}}return e},inheritFromMe:true,noInherit:{mpadded:{width:true,height:true,depth:true,lspace:true,voffset:true},mtable:{width:true,height:true,depth:true,align:true}},setTeXclass:a.mbase.setChildTeXclass});a.merror=a.mbase.Subclass({type:"merror",inferRow:true,linebreakContainer:true,texClass:a.TEXCLASS.ORD});a.mpadded=a.mbase.Subclass({type:"mpadded",inferRow:true,isSpacelike:a.mbase.childrenSpacelike,isEmbellished:a.mbase.childEmbellished,Core:a.mbase.childCore,CoreMO:a.mbase.childCoreMO,defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT,width:"",height:"",depth:"",lspace:0,voffset:0},setTeXclass:a.mbase.setChildTeXclass});a.mphantom=a.mbase.Subclass({type:"mphantom",texClass:a.TEXCLASS.ORD,inferRow:true,isSpacelike:a.mbase.childrenSpacelike,isEmbellished:a.mbase.childEmbellished,Core:a.mbase.childCore,CoreMO:a.mbase.childCoreMO,setTeXclass:a.mbase.setChildTeXclass});a.mfenced=a.mbase.Subclass({type:"mfenced",defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT,open:"(",close:")",separators:","},texClass:a.TEXCLASS.OPEN,setTeXclass:function(g){this.getPrevClass(g);var e=this.getValues("open","close","separators");e.open=e.open.replace(/[ \t\n\r]/g,"");e.close=e.close.replace(/[ \t\n\r]/g,"");e.separators=e.separators.replace(/[ \t\n\r]/g,"");if(e.open!==""){this.SetData("open",a.mo(e.open).With({stretchy:true,texClass:a.TEXCLASS.OPEN}));g=this.data.open.setTeXclass(g)}if(e.separators!==""){while(e.separators.length<this.data.length){e.separators+=e.separators.charAt(e.separators.length-1)}}if(this.data[0]){g=this.data[0].setTeXclass(g)}for(var f=1,d=this.data.length;f<d;f++){if(this.data[f]){if(e.separators!==""){this.SetData("sep"+f,a.mo(e.separators.charAt(f-1)));g=this.data["sep"+f].setTeXclass(g)}g=this.data[f].setTeXclass(g)}}if(e.close!==""){this.SetData("close",a.mo(e.close).With({stretchy:true,texClass:a.TEXCLASS.CLOSE}));g=this.data.close.setTeXclass(g)}this.updateTeXclass(this.data.open);return g}});a.menclose=a.mbase.Subclass({type:"menclose",inferRow:true,linebreakContainer:true,defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT,notation:a.NOTATION.LONGDIV,texClass:a.TEXCLASS.ORD},setTeXclass:a.mbase.setSeparateTeXclasses});a.msubsup=a.mbase.Subclass({type:"msubsup",base:0,sub:1,sup:2,isEmbellished:a.mbase.childEmbellished,Core:a.mbase.childCore,CoreMO:a.mbase.childCoreMO,defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT,subscriptshift:"",superscriptshift:"",texClass:a.AUTO},autoDefault:function(d){if(d==="texClass"){return(this.isEmbellished()?this.CoreMO().Get(d):a.TEXCLASS.ORD)}return 0},adjustChild_displaystyle:function(d){if(d>0){return false}return this.Get("displaystyle")},adjustChild_scriptlevel:function(e){var d=this.Get("scriptlevel");if(e>0){d++}return d},adjustChild_texprimestyle:function(d){if(d===this.sub){return true}return this.Get("texprimestyle")},setTeXclass:a.mbase.setBaseTeXclasses});a.msub=a.msubsup.Subclass({type:"msub"});a.msup=a.msubsup.Subclass({type:"msup",sub:2,sup:1});a.mmultiscripts=a.msubsup.Subclass({type:"mmultiscripts",adjustChild_texprimestyle:function(d){if(d%2===1){return true}return this.Get("texprimestyle")}});a.mprescripts=a.mbase.Subclass({type:"mprescripts"});a.none=a.mbase.Subclass({type:"none"});a.munderover=a.mbase.Subclass({type:"munderover",base:0,under:1,over:2,sub:1,sup:2,ACCENTS:["","accentunder","accent"],linebreakContainer:true,isEmbellished:a.mbase.childEmbellished,Core:a.mbase.childCore,CoreMO:a.mbase.childCoreMO,defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT,accent:a.AUTO,accentunder:a.AUTO,align:a.ALIGN.CENTER,texClass:a.AUTO,subscriptshift:"",superscriptshift:""},autoDefault:function(d){if(d==="texClass"){return(this.isEmbellished()?this.CoreMO().Get(d):a.TEXCLASS.ORD)}if(d==="accent"&&this.data[this.over]){return this.data[this.over].CoreMO().Get("accent")}if(d==="accentunder"&&this.data[this.under]){return this.data[this.under].CoreMO().Get("accent")}return false},adjustChild_displaystyle:function(d){if(d>0){return false}return this.Get("displaystyle")},adjustChild_scriptlevel:function(f){var e=this.Get("scriptlevel");var d=(this.data[this.base]&&!this.Get("displaystyle")&&this.data[this.base].CoreMO().Get("movablelimits"));if(f==this.under&&(d||!this.Get("accentunder"))){e++}if(f==this.over&&(d||!this.Get("accent"))){e++}return e},adjustChild_texprimestyle:function(d){if(d===this.base&&this.data[this.over]){return true}return this.Get("texprimestyle")},setTeXclass:a.mbase.setBaseTeXclasses});a.munder=a.munderover.Subclass({type:"munder"});a.mover=a.munderover.Subclass({type:"mover",over:1,under:2,sup:1,sub:2,ACCENTS:["","accent","accentunder"]});a.mtable=a.mbase.Subclass({type:"mtable",defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT,align:a.ALIGN.AXIS,rowalign:a.ALIGN.BASELINE,columnalign:a.ALIGN.CENTER,groupalign:"{left}",alignmentscope:true,columnwidth:a.WIDTH.AUTO,width:a.WIDTH.AUTO,rowspacing:"1ex",columnspacing:".8em",rowlines:a.LINES.NONE,columnlines:a.LINES.NONE,frame:a.LINES.NONE,framespacing:"0.4em 0.5ex",equalrows:false,equalcolumns:false,displaystyle:false,side:a.SIDE.RIGHT,minlabelspacing:"0.8em",texClass:a.TEXCLASS.ORD,useHeight:1},inheritFromMe:true,noInherit:{mover:{align:true},munder:{align:true},munderover:{align:true},mtable:{align:true,rowalign:true,columnalign:true,groupalign:true,alignmentscope:true,columnwidth:true,width:true,rowspacing:true,columnspacing:true,rowlines:true,columnlines:true,frame:true,framespacing:true,equalrows:true,equalcolumns:true,side:true,minlabelspacing:true,texClass:true,useHeight:1}},linebreakContainer:true,Append:function(){for(var e=0,d=arguments.length;e<d;e++){if(!((arguments[e] instanceof a.mtr)||(arguments[e] instanceof a.mlabeledtr))){arguments[e]=a.mtd(arguments[e])}}this.SUPER(arguments).Append.apply(this,arguments)},setTeXclass:a.mbase.setSeparateTeXclasses});a.mtr=a.mbase.Subclass({type:"mtr",defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT,rowalign:a.INHERIT,columnalign:a.INHERIT,groupalign:a.INHERIT},inheritFromMe:true,noInherit:{mrow:{rowalign:true,columnalign:true,groupalign:true},mtable:{rowalign:true,columnalign:true,groupalign:true}},linebreakContainer:true,Append:function(){for(var e=0,d=arguments.length;e<d;e++){if(!(arguments[e] instanceof a.mtd)){arguments[e]=a.mtd(arguments[e])}}this.SUPER(arguments).Append.apply(this,arguments)},setTeXclass:a.mbase.setSeparateTeXclasses});a.mtd=a.mbase.Subclass({type:"mtd",inferRow:true,linebreakContainer:true,isEmbellished:a.mbase.childEmbellished,Core:a.mbase.childCore,CoreMO:a.mbase.childCoreMO,defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT,rowspan:1,columnspan:1,rowalign:a.INHERIT,columnalign:a.INHERIT,groupalign:a.INHERIT},setTeXclass:a.mbase.setSeparateTeXclasses});a.maligngroup=a.mbase.Subclass({type:"malign",isSpacelike:function(){return true},defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT,groupalign:a.INHERIT},inheritFromMe:true,noInherit:{mrow:{groupalign:true},mtable:{groupalign:true}}});a.malignmark=a.mbase.Subclass({type:"malignmark",defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT,edge:a.SIDE.LEFT},isSpacelike:function(){return true}});a.mlabeledtr=a.mtr.Subclass({type:"mlabeledtr"});a.maction=a.mbase.Subclass({type:"maction",defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT,actiontype:a.ACTIONTYPE.TOGGLE,selection:1},selected:function(){return this.data[this.Get("selection")-1]||a.NULL},isEmbellished:function(){return this.selected().isEmbellished()},isSpacelike:function(){return this.selected().isSpacelike()},Core:function(){return this.selected().Core()},CoreMO:function(){return this.selected().CoreMO()},setTeXclass:function(d){if(this.Get("actiontype")===a.ACTIONTYPE.TOOLTIP&&this.data[1]){this.data[1].setTeXclass()}return this.selected().setTeXclass(d)}});a.semantics=a.mbase.Subclass({type:"semantics",isEmbellished:a.mbase.childEmbellished,Core:a.mbase.childCore,CoreMO:a.mbase.childCoreMO,defaults:{definitionURL:null,encoding:null},setTeXclass:a.mbase.setChildTeXclass});a.annotation=a.mbase.Subclass({type:"annotation",isToken:true,linebreakContainer:true,defaults:{definitionURL:null,encoding:null,cd:"mathmlkeys",name:"",src:null}});a["annotation-xml"]=a.mbase.Subclass({type:"annotation-xml",linebreakContainer:true,defaults:{definitionURL:null,encoding:null,cd:"mathmlkeys",name:"",src:null}});a.math=a.mstyle.Subclass({type:"math",defaults:{mathvariant:a.VARIANT.NORMAL,mathsize:a.SIZE.NORMAL,mathcolor:"",mathbackground:a.COLOR.TRANSPARENT,scriptlevel:0,displaystyle:a.AUTO,display:"inline",maxwidth:"",overflow:a.OVERFLOW.LINEBREAK,altimg:"","altimg-width":"","altimg-height":"","altimg-valign":"",alttext:"",cdgroup:"",scriptsizemultiplier:Math.sqrt(1/2),scriptminsize:"8px",infixlinebreakstyle:a.LINEBREAKSTYLE.BEFORE,lineleading:"1ex",indentshift:"auto",indentalign:a.INDENTALIGN.AUTO,indentalignfirst:a.INDENTALIGN.INDENTALIGN,indentshiftfirst:a.INDENTSHIFT.INDENTSHIFT,indentalignlast:a.INDENTALIGN.INDENTALIGN,indentshiftlast:a.INDENTSHIFT.INDENTSHIFT,decimalseparator:".",texprimestyle:false},autoDefault:function(d){if(d==="displaystyle"){return this.Get("display")==="block"}return""},linebreakContainer:true,setTeXclass:a.mbase.setChildTeXclass});a.chars=a.mbase.Subclass({type:"chars",Append:function(){this.data.push.apply(this.data,arguments)},value:function(){return this.data.join("")},toString:function(){return this.data.join("")}});a.entity=a.mbase.Subclass({type:"entity",Append:function(){this.data.push.apply(this.data,arguments)},value:function(){if(this.data[0].substr(0,2)==="#x"){return parseInt(this.data[0].substr(2),16)}else{if(this.data[0].substr(0,1)==="#"){return parseInt(this.data[0].substr(1))}else{return 0}}},toString:function(){var d=this.value();if(d<=65535){return String.fromCharCode(d)}d-=65536;return String.fromCharCode((d>>10)+55296)+String.fromCharCode((d&1023)+56320)}});a.xml=a.mbase.Subclass({type:"xml",Init:function(){this.div=document.createElement("div");return this.SUPER(arguments).Init.apply(this,arguments)},Append:function(){for(var e=0,d=arguments.length;e<d;e++){var f=this.Import(arguments[e]);this.data.push(f);this.div.appendChild(f)}},Import:function(h){if(document.importNode){return document.importNode(h,true)}var e,f,d;if(h.nodeType===1){e=document.createElement(h.nodeName);for(f=0,d=h.attributes.length;f<d;f++){var g=h.attributes[f];if(g.specified&&g.nodeValue!=null&&g.nodeValue!=""){e.setAttribute(g.nodeName,g.nodeValue)}if(g.nodeName==="style"){e.style.cssText=g.nodeValue}}if(h.className){e.className=h.className}}else{if(h.nodeType===3||h.nodeType===4){e=document.createTextNode(h.nodeValue)}else{if(h.nodeType===8){e=document.createComment(h.nodeValue)}else{return document.createTextNode("")}}}for(f=0,d=h.childNodes.length;f<d;f++){e.appendChild(this.Import(h.childNodes[f]))}return e},value:function(){return this.div},toString:function(){return this.div.innerHTML}});a.TeXAtom=a.mbase.Subclass({type:"texatom",inferRow:true,texClass:a.TEXCLASS.ORD,Core:a.mbase.childCore,CoreMO:a.mbase.childCoreMO,isEmbellished:a.mbase.childEmbellished,setTeXclass:function(d){this.data[0].setTeXclass();return this.adjustTeXclass(d)},adjustTeXclass:a.mo.prototype.adjustTeXclass});a.NULL=a.mbase().With({type:"null"});var b=a.TEXCLASS;var c={ORD:[0,0,b.ORD],ORD11:[1,1,b.ORD],ORD21:[2,1,b.ORD],ORD02:[0,2,b.ORD],ORD55:[5,5,b.ORD],OP:[1,2,b.OP,{largeop:true,movablelimits:true,symmetric:true}],OPFIXED:[1,2,b.OP,{largeop:true,movablelimits:true}],INTEGRAL:[0,1,b.OP,{largeop:true,symmetric:true}],INTEGRAL2:[1,2,b.OP,{largeop:true,symmetric:true}],BIN3:[3,3,b.BIN],BIN4:[4,4,b.BIN],BIN01:[0,1,b.BIN],BIN5:[5,5,b.BIN],TALLBIN:[4,4,b.BIN,{stretchy:true}],BINOP:[4,4,b.BIN,{largeop:true,movablelimits:true}],REL:[5,5,b.REL],REL1:[1,1,b.REL,{stretchy:true}],REL4:[4,4,b.REL],RELSTRETCH:[5,5,b.REL,{stretchy:true}],RELACCENT:[5,5,b.REL,{accent:true}],WIDEREL:[5,5,b.REL,{accent:true,stretchy:true}],OPEN:[0,0,b.OPEN,{fence:true,stretchy:true,symmetric:true}],CLOSE:[0,0,b.CLOSE,{fence:true,stretchy:true,symmetric:true}],INNER:[0,0,b.INNER],PUNCT:[0,3,b.PUNCT],ACCENT:[0,0,b.ORD,{accent:true}],WIDEACCENT:[0,0,b.ORD,{accent:true,stretchy:true}]};a.mo.Augment({SPACE:["0em","0.1111em","0.1667em","0.2222em","0.2667em","0.3333em"],RANGES:[[32,127,b.REL,"BasicLatin"],[160,255,b.ORD,"Latin1Supplement"],[256,383,b.ORD],[384,591,b.ORD],[688,767,b.ORD,"SpacingModLetters"],[768,879,b.ORD,"CombDiacritMarks"],[880,1023,b.ORD,"GreekAndCoptic"],[7680,7935,b.ORD],[8192,8303,b.PUNCT,"GeneralPunctuation"],[8304,8351,b.ORD],[8352,8399,b.ORD],[8400,8447,b.ORD,"CombDiactForSymbols"],[8448,8527,b.ORD,"LetterlikeSymbols"],[8528,8591,b.ORD],[8592,8703,b.REL,"Arrows"],[8704,8959,b.BIN,"MathOperators"],[8960,9215,b.ORD,"MiscTechnical"],[9312,9471,b.ORD],[9472,9631,b.ORD],[9632,9727,b.ORD,"GeometricShapes"],[9984,10175,b.ORD,"Dingbats"],[10176,10223,b.ORD,"MiscMathSymbolsA"],[10224,10239,b.REL,"SupplementalArrowsA"],[10496,10623,b.REL,"SupplementalArrowsB"],[10624,10751,b.ORD,"MiscMathSymbolsB"],[10752,11007,b.BIN,"SuppMathOperators"],[11008,11263,b.ORD,"MiscSymbolsAndArrows"],[119808,120831,b.ORD]],OPTABLE:{prefix:{"\u2200":c.ORD21,"\u2202":c.ORD21,"\u2203":c.ORD21,"\u2207":c.ORD21,"\u220F":c.OP,"\u2210":c.OP,"\u2211":c.OP,"\u2212":c.BIN01,"\u2213":c.BIN01,"\u221A":[1,1,b.ORD,{stretchy:true}],"\u2220":c.ORD,"\u222B":c.INTEGRAL,"\u222E":c.INTEGRAL,"\u22C0":c.OP,"\u22C1":c.OP,"\u22C2":c.OP,"\u22C3":c.OP,"\u2308":c.OPEN,"\u230A":c.OPEN,"\u27E8":c.OPEN,"\u27EE":c.OPEN,"\u2A00":c.OP,"\u2A01":c.OP,"\u2A02":c.OP,"\u2A04":c.OP,"\u2A06":c.OP,"\u00AC":c.ORD21,"\u00B1":c.BIN01,"(":c.OPEN,"+":c.BIN01,"-":c.BIN01,"[":c.OPEN,"{":c.OPEN,"|":c.OPEN},postfix:{"!":[1,0,b.CLOSE],"&":c.ORD,"\u2032":c.ORD02,"\u203E":c.WIDEACCENT,"\u2309":c.CLOSE,"\u230B":c.CLOSE,"\u23DE":c.WIDEACCENT,"\u23DF":c.WIDEACCENT,"\u266D":c.ORD02,"\u266E":c.ORD02,"\u266F":c.ORD02,"\u27E9":c.CLOSE,"\u27EF":c.CLOSE,"\u02C6":c.WIDEACCENT,"\u02C7":c.WIDEACCENT,"\u02C9":c.WIDEACCENT,"\u02CA":c.ACCENT,"\u02CB":c.ACCENT,"\u02D8":c.ACCENT,"\u02D9":c.ACCENT,"\u02DC":c.WIDEACCENT,"\u0302":c.WIDEACCENT,"\u00A8":c.ACCENT,"\u00AF":c.WIDEACCENT,")":c.CLOSE,"]":c.CLOSE,"^":c.WIDEACCENT,_:c.WIDEACCENT,"`":c.ACCENT,"|":c.CLOSE,"}":c.CLOSE,"~":c.WIDEACCENT},infix:{"":c.ORD,"%":[3,3,b.ORD],"\u2022":c.BIN4,"\u2026":c.INNER,"\u2044":c.TALLBIN,"\u2061":c.ORD,"\u2062":c.ORD,"\u2063":[0,0,b.ORD,{linebreakstyle:"after",separator:true}],"\u2064":c.ORD,"\u2190":c.WIDEREL,"\u2191":c.RELSTRETCH,"\u2192":c.WIDEREL,"\u2193":c.RELSTRETCH,"\u2194":c.WIDEREL,"\u2195":c.RELSTRETCH,"\u2196":c.RELSTRETCH,"\u2197":c.RELSTRETCH,"\u2198":c.RELSTRETCH,"\u2199":c.RELSTRETCH,"\u21A6":c.WIDEREL,"\u21A9":c.WIDEREL,"\u21AA":c.WIDEREL,"\u21BC":c.WIDEREL,"\u21BD":c.WIDEREL,"\u21C0":c.WIDEREL,"\u21C1":c.WIDEREL,"\u21CC":c.WIDEREL,"\u21D0":c.WIDEREL,"\u21D1":c.RELSTRETCH,"\u21D2":c.WIDEREL,"\u21D3":c.RELSTRETCH,"\u21D4":c.WIDEREL,"\u21D5":c.RELSTRETCH,"\u2208":c.REL,"\u2209":c.REL,"\u220B":c.REL,"\u2212":c.BIN4,"\u2213":c.BIN4,"\u2215":c.TALLBIN,"\u2216":c.BIN4,"\u2217":c.BIN4,"\u2218":c.BIN4,"\u2219":c.BIN4,"\u221D":c.REL,"\u2223":c.REL,"\u2225":c.REL,"\u2227":c.BIN4,"\u2228":c.BIN4,"\u2229":c.BIN4,"\u222A":c.BIN4,"\u223C":c.REL,"\u2240":c.BIN4,"\u2243":c.REL,"\u2245":c.REL,"\u2248":c.REL,"\u224D":c.REL,"\u2250":c.REL,"\u2260":c.REL,"\u2261":c.REL,"\u2264":c.REL,"\u2265":c.REL,"\u226A":c.REL,"\u226B":c.REL,"\u227A":c.REL,"\u227B":c.REL,"\u2282":c.REL,"\u2283":c.REL,"\u2286":c.REL,"\u2287":c.REL,"\u228E":c.BIN4,"\u2291":c.REL,"\u2292":c.REL,"\u2293":c.BIN4,"\u2294":c.BIN4,"\u2295":c.BIN4,"\u2296":c.BIN4,"\u2297":c.BIN4,"\u2298":c.BIN4,"\u2299":c.BIN4,"\u22A2":c.REL,"\u22A3":c.REL,"\u22A4":c.ORD55,"\u22A5":c.REL,"\u22A8":c.REL,"\u22C4":c.BIN4,"\u22C5":c.BIN4,"\u22C6":c.BIN4,"\u22C8":c.REL,"\u22EE":c.ORD55,"\u22EF":c.INNER,"\u22F1":[5,5,b.INNER],"\u25B3":c.BIN4,"\u25B5":c.BIN4,"\u25B9":c.BIN4,"\u25BD":c.BIN4,"\u25BF":c.BIN4,"\u25C3":c.BIN4,"\u2758":c.REL,"\u27F5":c.WIDEREL,"\u27F6":c.WIDEREL,"\u27F7":c.WIDEREL,"\u27F8":c.WIDEREL,"\u27F9":c.WIDEREL,"\u27FA":c.WIDEREL,"\u27FC":c.WIDEREL,"\u2A2F":c.BIN4,"\u2A3F":c.BIN4,"\u2AAF":c.REL,"\u2AB0":c.REL,"\u00B1":c.BIN4,"\u00B7":c.BIN4,"\u00D7":c.BIN4,"\u00F7":c.BIN4,"*":c.BIN3,"+":c.BIN4,",":[0,3,b.PUNCT,{linebreakstyle:"after",separator:true}],"-":c.BIN4,".":[3,3,b.ORD],"/":c.ORD11,":":[1,2,b.REL],";":[0,3,b.PUNCT,{linebreakstyle:"after",separator:true}],"<":c.REL,"=":c.REL,">":c.REL,"?":[1,1,b.CLOSE],"\\":c.ORD,"^":c.ORD11,_:c.ORD11,"|":[2,2,b.ORD,{fence:true,stretchy:true,symmetric:true}],"#":c.ORD,"$":c.ORD,"\u002E":[0,3,b.PUNCT,{separator:true}],"\u02B9":c.ORD,"\u0300":c.ACCENT,"\u0301":c.ACCENT,"\u0303":c.WIDEACCENT,"\u0304":c.ACCENT,"\u0306":c.ACCENT,"\u0307":c.ACCENT,"\u0308":c.ACCENT,"\u030C":c.ACCENT,"\u0332":c.WIDEACCENT,"\u0338":c.REL4,"\u2015":[0,0,b.ORD,{stretchy:true}],"\u2017":[0,0,b.ORD,{stretchy:true}],"\u2020":c.BIN3,"\u2021":c.BIN3,"\u20D7":c.ACCENT,"\u2111":c.ORD,"\u2113":c.ORD,"\u2118":c.ORD,"\u211C":c.ORD,"\u2205":c.ORD,"\u221E":c.ORD,"\u2305":c.BIN3,"\u2306":c.BIN3,"\u2322":c.REL4,"\u2323":c.REL4,"\u2329":c.OPEN,"\u232A":c.CLOSE,"\u23AA":c.ORD,"\u23AF":[0,0,b.ORD,{stretchy:true}],"\u23B0":c.OPEN,"\u23B1":c.CLOSE,"\u2500":c.ORD,"\u25EF":c.BIN3,"\u2660":c.ORD,"\u2661":c.ORD,"\u2662":c.ORD,"\u2663":c.ORD,"\u3008":c.OPEN,"\u3009":c.CLOSE,"\uFE37":c.WIDEACCENT,"\uFE38":c.WIDEACCENT}}},{OPTYPES:c});a.mo.prototype.OPTABLE.infix["^"]=c.WIDEREL;a.mo.prototype.OPTABLE.infix._=c.WIDEREL})(MathJax.ElementJax.mml);MathJax.ElementJax.mml.loadComplete("jax.js");

