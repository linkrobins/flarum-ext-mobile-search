import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app';
import IndexPage from 'flarum/forum/components/IndexPage';
import Search from 'flarum/forum/components/Search';

app.initializers.add('linkrobins-mobile-search', () => {
    console.log('Mobile search extension is running'); // This will help us debug

    extend(IndexPage.prototype, 'navItems', function (items) {
        // We add a custom class 'MobileSearch' to bypass Flarum's default hidden search CSS
        items.add('search', Search.component({
            state: app.search,
        }), 100);
    });
});
