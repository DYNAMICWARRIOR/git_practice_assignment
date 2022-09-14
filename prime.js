//create a prime number problem
let N=10;
for(let i=1; i<=N; i++)
{
	let count=0;
	for(let j=1; j<=i; j++)
	{
		if(i%j==0)
		{
			count++;
		}
	}
}
if(count==2)
{
	console.log(i, "is Prime");
}
else
{
	console.log(i, "is not Prime");
}