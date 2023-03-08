import { ISideMenuNode } from '../../layout/models/menu.model';

export const MENU_DATA: Array<ISideMenuNode> = [
  {
    id: '1',
    icon: '',
    category: 'dashboard',
    name: 'common.menu.dashboard.name',
    route: '/dashboard/home',
    router: '/dashboard',
    order: 1,
    level: 1,
    children: [
    ]
  },
  {
    id: '1',
    icon: '',
    category: 'master',
    name: 'common.menu.master.name',
    route: '/master',
    router: '/master',
    order: 1,
    level: 1,
    children: [
      {
        level: 2,
        id: '101',
        icon: 'icon-company',
        category: 'master',
        name: 'common.menu.master.company',
        route: '/master/company',
        order: 1,
        children: [],
        role: 'ADMIN'
      },
      {
        level: 2,
        id: '102',
        icon: 'icon-user-list',
        category: 'master',
        name: 'common.menu.master.user',
        route: '/master/user',
        order: 2,
        children: [],
        role: 'ADMIN'
      },
      {
        id: '104',
        level: 2,
        icon: 'icon-team',
        category: 'master',
        name: 'common.menu.master.customer',
        route: '/master/customer',
        order: 4,
        children: []
      },
      {
        id: '106',
        level: 2,
        icon: 'icon-supplier',
        category: 'master',
        name: 'common.menu.master.supplier',
        route: '/master/supplier',
        order: 6,
        children: []
      },
      {
        id: '108',
        level: 2,
        icon: 'icon-product',
        category: 'master',
        name: 'common.menu.master.product',
        route: '/master/product',
        order: 8,
        children: []
      },
      {
        id: '109',
        level: 2,
        icon: 'icon-grid',
        category: 'master',
        name: 'common.menu.master.set-product-composition',
        route: '/master/set-product',
        order: 9,
        children: []
      },
      {
        id: '111',
        level: 2,
        icon: 'icon-money',
        category: 'master',
        name: 'common.menu.master.unit-sales-price',
        route: '/master/sales-unit-price',
        order: 11,
        children: []
      },
      {
        id: '112',
        level: 2,
        icon: 'icon-money',
        category: 'master',
        name: 'common.menu.master.purchase-price-unit',
        route: '/master/purchase-unit-price',
        order: 12,
        children: []
      },
      {
        id: '121',
        level: 2,
        icon: 'icon-holiday1',
        category: 'master',
        name: 'common.menu.master.holiday',
        route: '/master/holiday',
        order: 20,
        children: []
      },
      {
        id: '113',
        level: 2,
        icon: 'icon-product-2d',
        category: 'master',
        name: 'common.menu.master.product-category-1',
        route: '/master/product-category-01',
        order: 13,
        children: []
      },
      {
        id: '114',
        level: 2,
        icon: 'icon-product-2d',
        category: 'master',
        name: 'common.menu.master.product-category-2',
        route: '/master/product-category-02',
        order: 14,
        children: []
      },
      {
        id: '115',
        level: 2,
        icon: 'icon-product-2d',
        category: 'master',
        name: 'common.menu.master.product-category-3',
        route: '/master/product-category-03',
        order: 15,
        children: []
      },
      {
        id: '116',
        level: 2,
        icon: 'icon-product-2d',
        category: 'master',
        name: 'common.menu.master.product-category-4',
        route: '/master/product-category-04',
        order: 16,
        children: []
      },
      {
        id: '117',
        level: 2,
        icon: 'icon-product-2d',
        category: 'master',
        name: 'common.menu.master.product-category-5',
        route: '/master/product-category-05',
        order: 17,
        children: []
      },
      {
        id: '118',
        level: 2,
        icon: 'icon-repository',
        category: 'master',
        name: 'common.menu.master.repository',
        route: '/master/repository',
        order: 18,
        children: []
      },
      {
        id: '119',
        level: 2,
        icon: 'icon-location',
        category: 'master',
        name: 'common.menu.master.location',
        route: '/master/location',
        order: 19,
        children: []
      },
      {
        id: '120',
        level: 2,
        icon: 'icon-coins',
        category: 'master',
        name: 'common.menu.master.unit',
        route: '/master/unit',
        order: 20,
        children: []
      }
    ]
  },
  {
    id: '9',
    icon: '',
    category: 'import',
    name: 'common.menu.import.name',
    route: '/import',
    router: '/import',
    order: 2,
    level: 1,
    children: [
      {
        id: '9',
        icon: 'icon-list',
        category: 'import',
        name: 'common.menu.import.name-title',
        route: '/import/receipt-order-list',
        router: '/import/receipt-order-list',
        order: 2,
        level: 1,
        children:[]
      }
    ]
  },

  {
    id: '2',
    icon: '',
    category: 'receipt',
    name: 'common.menu.receipt.name',
    route: '/receipt',
    router: '/receipt',
    order: 2,
    level: 1,
    children: [
      {
        id: '201',
        level: 2,
        icon: 'icon-list',
        category: 'receipt',
        name: 'common.menu.receipt.inventory-input-list-title',
        route: '/receipt/inventory-input-list',
        order: 1,
        children: [
          {
            id: '202',
            level: 2,
            icon: 'icon-open-box',
            category: 'receipt',
            name: 'common.menu.receipt.inventory-input-plan-title',
            route: '/inventory-input-plan',
            order: 2,
            children: []
          }
        ]
      },
      {
        id: '202',
        level: 2,
        icon: 'icon-open-box',
        category: 'receipt',
        name: 'common.menu.receipt.inventory-input-plan-title',
        route: '/receipt/inventory-input-plan',
        order: 2,
        children: []
      },
      {
        id: '203',
        level: 2,
        icon: 'icon-open-box',
        category: 'receipt',
        name: 'common.menu.receipt.inventory-input-actual-title',
        route: '/receipt/inventory-input-actual',
        order: 3,
        children: []
      },

      {
        id: '204',
        level: 2,
        icon: 'icon-list',
        category: 'receipt',
        name: 'common.menu.receipt.list-of-returned-goods-receipts',
        route: '/receipt/return-receipt-input',
        order: 4,
        children: []
      },
      {
        id: '206',
        level: 2,
        icon: 'icon-list',
        category: 'receipt',
        name: 'common.menu.receipt.replenishment-list',
        route: '/receipt/order-list',
        order: 6,
        children: [
          {
            id: '301',
            level: 3,
            category: 'receipt',
            name: 'common.company-detail.title-add',
            route: '/receipt/orderDetail',
            order: 1,
            children: []
          }
        ]
      }
    ]
  },
  {
    id: '3',
    icon: '',
    category: 'delivery',
    name: 'common.menu.delivery.name',
    route: '/delivery',
    router: '/delivery',
    order: 2,
    level: 1,
    children: [
      {
        id: '301',
        level: 2,
        icon: 'icon-list',
        category: 'delivery',
        name: 'common.menu.delivery.entering-the-delivery-schedule',
        route: '/delivery/inventory-output-list',
        order: 1,
        children: []
      },
      {
        id: '302',
        level: 2,
        icon: 'icon-product',
        category: 'delivery',
        name: 'common.menu.delivery.scheduled-to-be-delivered-closed',
        route: '/delivery/inventory-output-plan',
        order: 2,
        children: []
      },
      {
        id: '303',
        level: 2,
        icon: 'icon-product',
        category: 'delivery',
        name: 'common.menu.delivery.delivery-record-registration',
        route: '/delivery/inventory-output-actual',
        order: 3,
        children: []
      },
      {
        id: '304',
        level: 2,
        icon: 'icon-list',
        category: 'delivery',
        name: 'common.menu.delivery.delivery-return-output',
        route: '/delivery/return-delivery-output',
        order: 4,
        children: []
      },
      {
        id: '305',
        level: 2,
        icon: 'icon-balance',
        category: 'delivery',
        name: 'common.menu.delivery.correction-of-returned-goods-delivery-record',
        route: '/delivery/temporary-allocation',
        order: 6,
        children: []
      },
      {
        id: '306',
        level: 2,
        icon: 'icon-batch',
        category: 'delivery',
        name: 'common.menu.delivery.temporary-allocation',
        route: '/delivery/batch-list',
        order: 7,
        children: []
      },
      {
        id: '308',
        level: 2,
        icon: 'icon-note',
        category: 'delivery',
        name: 'common.menu.delivery.report-output-list',
        route: '/delivery/delivery-instruction',
        order: 8,
        children: []
      },
      {
        id: '309',
        level: 2,
        icon: 'icon-truck',
        category: 'delivery',
        name: 'common.menu.delivery.delivery-change-allocation',
        route: '/delivery/delivery-change-allocation',
        order: 9,
        children: []
      },
      // {
      //   id: '310',
      //   level: 2,
      //   icon: 'icon-adjust',
      //   category: 'delivery',
      //   name: 'common.menu.delivery.batch-delete',
      //   route: '/delivery/xxx',
      //   order: 10,
      //   children: []
      // },
      {
        id: '311',
        level: 2,
        icon: 'icon-products',
        category: 'delivery',
        name: 'common.menu.delivery.owner-change-list',
        route: '/delivery/owner-change',
        order: 10,
        children: []
      },
      {
        id: '312',
        level: 2,
        icon: 'icon-news-paper',
        category: 'delivery',
        name: 'common.menu.delivery.shipping-fee',
        route: '/delivery/shipping-fee',
        order: 12,
        children: []
      },
      {
        id: '313',
        level: 2,
        icon: 'icon-list',
        category: 'delivery',
        name: 'common.menu.delivery.reserve-allocation',
        route: '/delivery/delivery-slip',
        order: 12,
        children: []
      }
    ]
  },
  {
    id: '4',
    icon: '',
    category: 'inventory',
    name: 'common.menu.inventory.name',
    route: '/inventory',
    router: '/inventory',
    order: 2,
    level: 1,
    children: [
      {
        id: '401',
        level: 2,
        icon: 'icon-products',
        category: 'inventory',
        name: 'common.menu.inventory.inventory-list',
        route: '/inventory/inventory-list',
        order: 1,
        children: []
      }
      ,
      {
        id: '402',
        level: 2,
        icon: 'icon-grid',
        category: 'inventory',
        name: 'common.menu.inventory.set-product-inventory',
        route: '/inventory/set-product-inventory-list',
        order: 1,
        children: []
      }
    ]
  },
  {
    id: '5',
    icon: '',
    category: 'stocktaking',
    name: 'common.menu.stock.name',
    route: '/stocktaking',
    router: '/stocktaking',
    order: 2,
    level: 1,
    children: [
      {
        id: '501',
        level: 2,
        icon: 'icon-list',
        category: 'stocktaking',
        name: 'common.menu.stock.list',
        route: '/stocktaking/list',
        order: 1,
        children: []
      },
      {
        id: '502',
        level: 2,
        icon: 'icon-report-checked',
        category: 'inventory',
        name: 'common.menu.stock.edit',
        route: '/stocktaking/register',
        order: 2,
        children: [],
        hidden: true
      },
      {
        id: '503',
        level: 2,
        icon: 'icon-report-checked',
        category: 'inventory',
        name: 'common.menu.stock.detail',
        route: '/stocktaking/detail',
        order: 2,
        children: [],
        hidden: true

      }
    ]
  },
  {
    id: '6',
    icon: '',
    category: 'daily',
    name: 'common.menu.daily.name',
    route: '/daily',
    router: '/daily',
    order: 2,
    level: 1,
    children: [
      {
        id: '601',
        level: 2,
        icon: 'icon-list',
        category: 'daily',
        name: 'common.menu.daily.daily-processing',
        route: '/daily/daily-process',
        order: 1,
        children: []
      }
      // ,
      // {
      //   id: '602',
      //   level: 2,
      //   icon: 'icon-report-page',
      //   category: 'daily',
      //   name: 'common.menu.daily.report-output-list',
      //   route: '/daily/xxx',
      //   order: 2,
      //   children: []
      // }
    ]
  },
  {
    id: '7',
    icon: '',
    category: 'edi',
    name: 'common.menu.edi.name',
    route: '/edi',
    router: '/edi',
    order: 2,
    level: 1,
    children: [
      {
        id: '701',
        level: 2,
        icon: 'icon-link',
        category: 'edi',
        name: 'common.menu.edi.delivery-record-transmission',
        route: '/edi/edi-list',
        order: 1,
        children: []
      }
    ]
  },
  {
    id: '8',
    icon: '',
    category: 'report',
    name: 'common.menu.report.name',
    route: '/report/report-list',
    router: '/report',
    order: 2,
    level: 1,
    children: [
    ]
  }
];

export const MENU_DATA_SYSTEM: Array<ISideMenuNode> = [
  {
    id: '1',
    icon: '',
    category: 'master',
    name: 'common.menu.master.name',
    route: '/master',
    router: '/master',
    order: 1,
    level: 1,
    children: [
      {
        id: '101',
        level: 2,
        icon: 'icon-company',
        category: 'master',
        name: 'common.menu.master.company',
        route: '/system/company',
        order: 1,
        children: []
      },
      {
        id: '102',
        level: 2,
        icon: 'icon-team',
        category: 'master',
        name: 'common.menu.master.user',
        route: '/system/user',
        order: 2,
        children: []
      }
    ]
  }
];
