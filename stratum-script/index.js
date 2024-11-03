import { StratumService } from '@capitalone/stratum-observability';
import { NewRelicPluginFactory } from '@capitalone/stratum-observability/plugins/new-relic';

export const NewRelicPlugin = NewRelicPluginFactory({
  defaultContext: { siteTheme: null }
});

export const TagKey = {
  VIEW_LISTING: 'VIEW_LISTING',
  VIEW_POST: 'VIEW_POST'
};

const catalog = {
  [TagKey.VIEW_LISTING]: {
    description: 'View the list of blog posts',
    eventType: 'base',
    id: 1,
  },
  [TagKey.VIEW_POST]: {
    description: 'View a specific blog post',
    eventType: 'base',
    id: 2,
    blogPostId: '{{pageId}}'
  }
};

export const stratumService = new StratumService({
  catalog: { items: catalog },
  productName: 'stratum-observability-ghpages',
  productVersion: '1',
  plugins: [NewRelicPlugin]
});
