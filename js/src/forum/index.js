import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app';
import IndexPage from 'flarum/forum/components/IndexPage';
import Search from 'flarum/forum/components/Search';

app.initializers.add('linkrobins-mobile-search', () => {
    // We use sidebarItems because they are visible at the top of the mobile home page
    extend(IndexPage.prototype, 'sidebarItems', function (items) {
        
        // Only show this on the homepage (IndexPage)
        items.add('search', Search.component({
            state: app.search,
        }), 100); // Higher priority (100) moves it to the very top
    });
});
