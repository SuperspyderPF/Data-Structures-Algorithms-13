isBipartite=(g)=>{x=new Map();s=[];for(i=0;i<g.length;i++){if(x.has(i))continue;x.set(i,true);s.push(i);while(s.length>0){m=s.pop();for(n of g[m]){if(!x.has(n)){x.set(n,!x.get(m));s.push(n);continue;}if(x.get(n)===x.get(m))return false;}}}return true}