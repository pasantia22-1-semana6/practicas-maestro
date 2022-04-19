export default{
    async getDogs(){
        const response = await fetch('https://barkwireapi.brooks.now.sh/dogs');
        console.log(response)
        return response.json();
    },
    async getDog(id){
        const response = await fetch(`https://barkwireapi.brooks.now.sh/dogs/${id}`);
        console.log(response)
        return response.json();
    }
}