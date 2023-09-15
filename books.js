const my_api="https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=pLGZ8uk78WTGuyvI2jfxsqJr2kx52l3m"
window.onload=()=>{
    var fetchbtn=document.getElementById("fetch-btn");
    fetchbtn.addEventListener('click',async()=>{
        await fetch(my_api).then((res)=>
        {
            res.json().then((data)=>
            {
                booklist=data.results.books;
                for(let i=0;booklist.length;i++)
                {
                    var book=document.createElement('div');
                    book.innerHTML=`title:${booklist[i].title} author:${booklist[i].author}`;
                    document.getElementById('booklist').appendChild(book);
                }
            })
        }).catch((err)=>
        {
            console.log(err);

        })

    })
}
