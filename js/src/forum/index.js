import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app';
import IndexPage from 'flarum/forum/components/IndexPage';
import Search from 'flarum/forum/components/Search';

// IMPORTANT: This ID must match your composer.json name (linkrobins-mobile-search)
app.initializers.add('linkrobins-mobile-search', () => {
    extend(IndexPage.prototype, 'viewItems', function (items) {
        // We use viewItems because you said it worked before
        // 100 priority forces it to the top of the list
        items.add('search', Search.component({
            state: app.search,
        }), 100);
    });
});
