$(document).ready(function() {
    var actual_select = 0;
    Tipped.create('.tooltip');
    Tipped.create('.tooltip-title', function(element) {
    return {
        title: $(element).data('title'), content: $(element).data('content')
    };
    });
    $('#tabs').tabulous({
        effect: 'flip'
    });	
    $('.timepicker').wickedpicker({twentyFour: true, title: 'Ajustar Hora', showSeconds: true, clearable: true});
    $(".range").change(function(){
        var id = $(this).data("id");
        $(".range-value"+id).html($(this).val());
    });
    $('.select2').select2({placeholder:'Seleccionar'});
    $(".modal-select").click(function(){
        $(".modal-select-box").css("display","table");
        actual_select = $(this);
    });
    $(".close-modal").click(function(){
        $(".modal-box, .modal-select-box").fadeOut();
    });
    $(".row-select").click(function(){
        var content = $(this).html();
        actual_select.val(content);
        $(".close-modal").click();
    });
    $(".inputfile").each(function(){
        $this = $(this);
        var id = $(this).data("id");
        $(".filelabel"+id).html('Subir Archivo').click(function(){
            $this.click();
        });
        $this.change(function(){
            $(".imagefile"+id).html("");
            $('.verfile'+id).html("");
            var value = $(this)[0].files;
            console.log("Multiple", value.length);
            for (let i = 0; i < value.length; i++) {
                $(".filelabel"+id).html('Seleccionado: '+value.length+' Archivos');
                if (value[i]) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $('.imagefile'+id+' .img').remove();
                        $('.imagefile'+id).append("<img src='"+e.target.result+"'>");
                        $('.verfile'+id).show();
                        if(i==0){
                            $('.verfile'+id).append('<a href="'+e.target.result+'" data-lightbox="imgs'+id+'" data-title="Imagen"><i class="fas fa-eye"></i></a>');
                        } else{
                            $('.verfile'+id).append('<a href="'+e.target.result+'" data-lightbox="imgs'+id+'" data-title="Imagen">&nbsp;</a>');
                        } 
                    };
                    reader.readAsDataURL(value[i]);
                }
            }
            
        });
    });
});