var config = {
    paths: {
        'bootstrap':'js/lib/bootstrap.min',
        'carousel':'js/lib/owl.carousel.min',
        'isotope':'js/lib/isotope.pkgd.min',
        'prettyPhoto':'js/lib/jquery.prettyPhoto',
        'flexslider':'js/lib/jquery.flexslider.min',
        'appear':'js/lib/jquery.appear',
        'parallax':'js/lib/jquery.parallax-1.1.3',
        'anime':'js/lib/anime.min',
        'revolution':'js/lib/revolution.tools.min',
        'rs6':'js/lib/rs6.min',
    },
    
    shim: {
        'bootstrap': {
            'deps': ['jquery']
        },
        'carousel': {
            'deps': ['jquery']
        },
        'isotope': {
            'deps': ['jquery']
        },
        'prettyPhoto': {
            'deps': ['jquery']
        },
        'flexslider': {
            'deps': ['jquery']
        },
        'appear': {
            'deps': ['jquery']
        },
        'parallax': {
            'deps': ['jquery']
        },
        'anime': {
            'deps': ['jquery']
        },
        'revolution': {
            'deps': ['jquery']
        },
        'rs6': {
            'deps': ['jquery', 'revolution']
        }
    },
    deps: [
        'js/main',
        'revolution',
        'rs6'
    ]
};