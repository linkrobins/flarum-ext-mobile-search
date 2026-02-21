import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app';
import IndexPage from 'flarum/forum/components/IndexPage';
import Search from 'flarum/forum/components/Search';

app.initializers.add('linkrobins-mobile-search', () => {
    extend(IndexPage.prototype, 'viewItems', function (items) {
        items.add('search', Search.component({
            state: app.search,
        }), 100); // 100 priority keeps it at the top of the toolbar
    });
});
