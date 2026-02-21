<?php

namespace Linkrobins\MobileSearch; // <--- Changed from ClarkWinkelmann

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/forum.less'),
];
