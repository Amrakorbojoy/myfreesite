/*!CK:1575209478!*//*1440386695,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["4vv8\/"]); }

__d('TimeSpentBitArrayLogger',['Arbiter','Banzai','BanzaiODS','TimeSpentArray','TimeSpentConfig','TimeSpentImmediateActiveSecondsLogger','UserActivity','isInIframe'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p={delay:i.BASIC.delay,retry:true};function q(r,s){if(i.isEnabled('time_spent_bit_array')){h.inform('timespent/tosbitdataposted',babelHelpers._extends({},r));if(typeof s=='number'){p.delay=s;}else p.delay=i.BASIC.delay;i.post('time_spent_bit_array',babelHelpers._extends({},r),p);p.delay=l.delay;}}f.exports={init:function(r){if(o())return;n.subscribe(function(t,u){var v=u.last_inform;k.update(v);m.maybeReportActiveSecond(v);});var s=Date.now();k.init(q,l,s);m.maybeReportActiveSecond(s);j.bumpEntityKey('ms.time_spent.qa.www','time_spent.bits.js_initialized');}};},null);