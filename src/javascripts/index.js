// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
//TODO

import 'bootstrap'

const displayRandomBox = function()
{
    let r = Math.random()

    if(r<0.5)
    {
        document.write('<div class="green box"></div>')
    }
    else
    {
        document.write('<div class="black box"></div>')
    }
}

function displayNBoxFor(n)
{
    for(let i = 0; i < n; i++)
    {
        displayRandomBox();
    }
}

function displayNBoxWhile(n)
{
let j = 0;
    while(j < nn)
    {
        displayRandomBox();
        j++;
    }
}

function displayNBoxDo(n)
{
    let k = 0;
    do
    {
        displayRandomBox();
        k++;
    }while(k < n);
}

displayNBoxFor(10);
displayNBoxFor(10);
displayNBoxDo(10);

const square = function(x)
{
    return x * x;
}

//alert(square(10))