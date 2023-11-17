//Pela aliança
var war = []
war.push(['o','o','o','o','*','h','h','*','*','*'])
war.push(['o','o','o','o','*','h','h','*','*','*'])
war.push(['*','o','o','o','o','*','*','*','*','*'])
war.push(['*','o','o','o','o','*','*','*','*','*'])
war.push(['*','*','*','*','*','h','h','*','*','*'])
war.push(['o','o','o','o','*','h','h','*','m','*'])
war.push(['o','o','o','o','*','*','*','*','*','*'])
war.push(['*','*','*','*','*','*','*','*','*','*'])
war.push(['*','o','o','o','o','h','h','*','*','*'])
war.push(['*','o','o','o','o','h','h','*','*','*'])

//Batalha lendária
/*
war.push(['*','o','o','o','o','*','*','*','*','*'])
war.push(['*','o','o','o','o','h','h','h','h','*'])
war.push(['*','*','*','*','*','h','h','h','h','*'])
war.push(['*','*','*','*','*','*','*','*','*','*'])
war.push(['m','*','*','*','*','h','h','h','h','*'])
war.push(['*','*','*','*','*','h','h','h','h','*'])
war.push(['*','*','*','*','*','*','*','*','*','*'])
war.push(['*','*','*','*','*','*','*','*','m','*'])
war.push(['*','o','o','o','o','*','*','*','*','*'])
war.push(['*','o','o','o','o','*','*','*','*','*'])
*/
//Loktar Ogar
/*
war.push(['*','*','*','o','*','*','*','*','*','*'])
war.push(['*','*','o','o','*','*','h','h','h','*'])
war.push(['*','o','o','o','*','*','*','h','h','*'])
war.push(['*','o','o','o','*','*','*','h','h','*'])
war.push(['*','o','o','o','*','*','*','h','h','*'])
war.push(['*','o','o','o','*','*','*','h','h','*'])
war.push(['*','o','o','o','*','*','*','h','h','*'])
war.push(['*','o','o','o','*','*','*','h','h','*'])
war.push(['*','*','o','o','*','*','h','h','h','*'])
war.push(['*','*','*','o','*','*','*','*','*','*'])
*/
var x = 0
var y = 0
var count=0
var hasMO=false
var hasMH=false
var orcsTotal = []
var humansTotal = []
somaPoderOrc=0
somaPoderHuman=0
var side = 'o'

for (x=0; x<war.length; x++ ){
    for (y=0; y<war.length; y++ ){
	
		if (y<5){
			side = 'o'
			
			if(war[x][y]=='m')
				hasMO=true;
			
		}else{
			side = 'h'
			
			if(war[x][y]=='m')
				hasMH=true;
		}
		
		if(war[x][y]==side){
			
			if( y > 0 )	
				if (war[x][y-1]==side)
					count++
				
			if (war[x][y+1]==side)
				count++
			
			if( x > 0 )
				if (war[x-1][y]==side)
					count++
			
			if( x < war.length-1 )
				if (war[x+1][y]==side)
					count++
			
			if (side=='o')
				orcsTotal.push(++count)
			else
				humansTotal.push(++count)	
			
			count=0;
		
		}			
    }   
}

if (hasMO){
	somaPoderOrc++;
	orcsTotal.forEach(function(item){
		somaPoderOrc+=item
	})
}else
	somaPoderOrc = orcsTotal.length
	
if (hasMH){
	somaPoderHuman++;
	humansTotal.forEach(function(item){
		somaPoderHuman+=item
	})
}else
	somaPoderHuman = humansTotal.length
	

if (somaPoderOrc > somaPoderHuman)
console.log("Loktar Ogar!!!")

if ( somaPoderHuman > somaPoderOrc)
console.log("Pela aliança!!!")

if ( somaPoderHuman == somaPoderOrc)
console.log("Batalha lendária!!!")