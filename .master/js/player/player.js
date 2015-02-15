(function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz;
    
    window.opspark.makePlayer = function () {
        var player, radius;
        
        radius = 25;
        
        player = draw.rect(radius, radius, '#666', null, null, -(radius+radius/10), -(radius/2));
        draw.circle(radius + 3, '#666', null, null, null, null, player);
        draw.circle(radius, '#CCC', null, null, null, null, player);
        draw.polyStar(radius, 3, 0, 0, '#666', null, null, null, null, player);
        draw.circle(radius-15, '#CCC', null, null, -5, null, player);
        player.radius = radius + 3;
        
        player.getProjectilePoint = function () {
            return player.localToGlobal(radius + 0, 0);
        };
        
        return _.extend(player, physikz.makeBody());
    };
}(window));