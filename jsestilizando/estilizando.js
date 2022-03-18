function creaCampos()
{
	var objeto_select=document.getElementById("contenedor_campo");
	var obj_option=document.createElement("input");
	objeto_select.appendChild(obj_option);
	obj_option.onblur=juntosonblur;
}
function juntosonblur()
{
	var alpine=document.getElementsByTagName("input")[0].value;
	var aviso=document.getElementById("contenedor_aviso");
	
	if (alpine.length>=4)
	{
		document.getElementById("contenedor_aviso").innerHTML="Has introducido la palabra con todos los requesitos requeridos.";
		document.getElementById("contenedor_aviso").className="alert alert-success";
	}
	else
	{	
		document.getElementById("contenedor_aviso").innerHTML="La palabra introducida debe contener como mínimo 4 caracteres.";
		document.getElementById("contenedor_aviso").className="alert alert-danger";
	}
}
