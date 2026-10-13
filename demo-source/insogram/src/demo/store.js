export const VERSION = 1;
export const profiles = [
  {id:'you',name:'Ari',username:'ari.creates',bio:'Collecting small moments, one frame at a time.',tone:'#1878b8',initials:'AR'},
  {id:'maya',name:'Maya',username:'maya.outside',bio:'Slow mornings and green things.',tone:'#658466',initials:'MY'},
  {id:'raka',name:'Raka',username:'raka.in.frames',bio:'Looking for colour in the everyday.',tone:'#ca805f',initials:'RK'},
  {id:'nina',name:'Nina',username:'nina.by.the.sea',bio:'Somewhere near the water.',tone:'#568995',initials:'NI'}
];
export function initialState(){return {version:VERSION,profile:{...profiles[0]},following:['maya','raka','nina'],liked:[],saved:[],seen:[],posts:[
 {id:'plants',userId:'maya',caption:'A little light, a little patience. The best part of a quiet morning. #slowliving #plants',asset:'plants',created:'2026-10-10T01:20:00Z',baseLikes:42,comments:[{id:'c1',userId:'raka',text:'The light in this corner is lovely.'}]},
 {id:'city',userId:'raka',caption:'Taking the long way home. There is always a new colour around the next corner. #citywalk #colour',asset:'city',created:'2026-10-10T09:30:00Z',baseLikes:68,comments:[]},
 {id:'coast',userId:'nina',caption:'A horizon worth putting the phone down for. #ocean #weekend',asset:'coast',created:'2026-10-10T10:10:00Z',baseLikes:95,comments:[{id:'c2',userId:'maya',text:'I can almost hear the waves.'}]}
],messages:[]};}
export function validState(value){return value&&value.version===VERSION&&Array.isArray(value.posts)&&value.posts.length<=50&&value.posts.every(p=>typeof p.id==='string'&&typeof p.caption==='string'&&p.caption.length<=1500&&Array.isArray(p.comments)&&!isNaN(Date.parse(p.created)))&&['saved','liked','following','seen','messages'].every(k=>Array.isArray(value[k]))&&value.profile&&typeof value.profile.username==='string'&&typeof value.profile.name==='string';}
export function transition(state,action){
 const next={...state};const toggle=(items,id)=>items.includes(id)?items.filter(x=>x!==id):[...items,id];
 if(action.type==='like'||action.type==='save'){if(!state.posts.some(p=>p.id===action.id))throw Error('This post is no longer available.');next[action.type==='like'?'liked':'saved']=toggle(state[action.type==='like'?'liked':'saved'],action.id);}
 else if(action.type==='follow'){if(!profiles.some(p=>p.id===action.id)||action.id==='you')throw Error('Choose another creator.');next.following=toggle(state.following,action.id);}
 else if(action.type==='comment'){const text=String(action.text||'').trim();if(!text||text.length>500)throw Error('Write a comment between 1 and 500 characters.');if(!state.posts.some(p=>p.id===action.id))throw Error('This post is no longer available.');next.posts=state.posts.map(p=>p.id===action.id?{...p,comments:[...p.comments,{id:action.commentId,userId:'you',text}]}:p);}
 else if(action.type==='deleteComment'){next.posts=state.posts.map(p=>p.id===action.postId?{...p,comments:p.comments.filter(c=>c.id!==action.id||c.userId!=='you')}:p);}
 else if(action.type==='publish'){const caption=String(action.caption||'').trim();if(!caption||caption.length>1500)throw Error('Write a caption between 1 and 1,500 characters.');if(state.posts.length>=50)throw Error('This demo supports up to 50 posts.');const post={id:action.id,userId:'you',caption,created:action.created,baseLikes:0,comments:[]};if(action.media){if(!/^data:(image\/(png|jpeg|webp)|video\/(mp4|webm));base64,/.test(action.media)||action.media.length>2900000)throw Error('Choose a supported image or video up to 2 MB.');post.media=action.media;post.mediaType=action.mediaType;}else post.asset=action.asset||'city';next.posts=[post,...state.posts];}
 else if(action.type==='deletePost'){const post=state.posts.find(p=>p.id===action.id);if(!post||post.userId!=='you')throw Error('You can only remove your own posts.');next.posts=state.posts.filter(p=>p.id!==action.id);next.liked=state.liked.filter(id=>id!==action.id);next.saved=state.saved.filter(id=>id!==action.id);}
 else if(action.type==='profile'){const name=String(action.name||'').trim(),username=String(action.username||'').trim(),bio=String(action.bio||'').trim();if(name.length<2||name.length>60)throw Error('Your name must contain 2–60 characters.');if(!/^[a-zA-Z0-9_.]{3,30}$/.test(username))throw Error('Use 3–30 letters, numbers, dots or underscores for your username.');if(profiles.slice(1).some(p=>p.username.toLowerCase()===username.toLowerCase()))throw Error('That username belongs to another demo creator.');if(bio.length>180)throw Error('Keep your bio within 180 characters.');next.profile={...state.profile,name,username,bio};}
 else if(action.type==='seen'){next.seen=state.seen.includes(action.id)?state.seen:[...state.seen,action.id];}
 else if(action.type==='message'){const text=String(action.text||'').trim();if(!text||text.length>500)throw Error('Write a message between 1 and 500 characters.');if(!profiles.some(p=>p.id===action.to)||action.to==='you')throw Error('Choose another creator.');next.messages=[...state.messages,{id:action.id,to:action.to,text,created:action.created}];}
 else throw Error('Unknown action.');
 return next;
}
