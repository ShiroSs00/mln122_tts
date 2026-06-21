const asset = (path) => `/assets/${path}`;

export const sceneAssets = {
  intro: [
    {
      src: asset("01_major_assets/01_four_market_chairs.png"),
      className: "asset-intro-chairs",
      layer: "foreground",
      depth: 0.82,
      horizontalDepth: 0.18,
      rotate: 1.5
    },
    {
      src: asset("07_constructivist_shapes/09_large_dotted_grid.png"),
      className: "asset-intro-grid",
      layer: "background",
      depth: 0.14,
      opacity: 0.42,
      reverse: true
    },
    {
      src: asset("07_constructivist_shapes/01_circle_cluster.png"),
      className: "asset-intro-circles",
      layer: "background",
      depth: 0.22,
      opacity: 0.58,
      reverse: true
    },
    {
      src: asset("07_constructivist_shapes/05_red_diagonal_bar_1.png"),
      className: "asset-intro-red-bar",
      layer: "background",
      depth: 0.2,
      horizontalDepth: 0.7,
      opacity: 0.76,
      rotate: 2
    },
    {
      src: asset("07_constructivist_shapes/16_abstract_network_nodes.png"),
      className: "asset-intro-network",
      layer: "midground",
      depth: 0.32,
      horizontalDepth: 0.45,
      opacity: 0.55,
      reverse: true
    },
    {
      src: asset("08_paper_collage_fragments/02_burgundy_torn_strip.png"),
      className: "asset-intro-paper-red",
      layer: "background",
      depth: 0.18,
      opacity: 0.62
    },
    {
      src: asset("08_paper_collage_fragments/04_long_cream_strip.png"),
      className: "asset-intro-paper-cream",
      layer: "background",
      depth: 0.12,
      opacity: 0.7,
      reverse: true
    }
  ],
  producer: [
    {
      src: asset("01_major_assets/02_minh_small_online_seller.png"),
      className: "asset-producer-minh",
      layer: "foreground",
      depth: 0.8,
      horizontalDepth: 0.36,
      rotate: 1.5,
      reactTo: ["all-in-platform", "hybrid-channel", "own-website"]
    },
    {
      src: asset("03_product_cards/01_tshirt_card.png"),
      className: "asset-producer-tshirt",
      layer: "midground",
      depth: 0.5,
      horizontalDepth: 0.52,
      rotate: 5,
      reactTo: ["all-in-platform", "hybrid-channel"],
      muteOn: ["own-website"]
    },
    {
      src: asset("03_product_cards/03_handbag_card.png"),
      className: "asset-producer-handbag",
      layer: "midground",
      depth: 0.43,
      horizontalDepth: 0.62,
      rotate: -5,
      reactTo: ["all-in-platform", "hybrid-channel"],
      muteOn: ["own-website"]
    },
    {
      src: asset("04_market_participant_icons/04_delivery_parcel.png"),
      className: "asset-producer-parcel",
      layer: "midground",
      depth: 0.34,
      rotate: 4
    },
    {
      src: asset("04_market_participant_icons/06_warehouse_box.png"),
      className: "asset-producer-box",
      layer: "midground",
      depth: 0.26,
      reverse: true
    },
    {
      src: asset("04_market_participant_icons/08_delivery_handcart.png"),
      className: "asset-producer-cart",
      layer: "foreground",
      depth: 0.66,
      horizontalDepth: 0.38,
      reactTo: ["all-in-platform"]
    },
    {
      src: asset("08_paper_collage_fragments/01_torn_cream_paper.png"),
      className: "asset-producer-paper",
      layer: "background",
      depth: 0.14,
      opacity: 0.6
    },
    {
      src: asset("07_constructivist_shapes/17_abstract_network_line.png"),
      className: "asset-producer-network",
      layer: "background",
      depth: 0.18,
      opacity: 0.52,
      reverse: true
    }
  ],
  consumer: [
    {
      src: asset("01_major_assets/04_lan_character_only.png"),
      className: "asset-consumer-lan",
      layer: "midground",
      depth: 0.55,
      rotate: 1.5,
      reactTo: ["buy-now", "compare-shops", "outside-brand"]
    },
    {
      src: asset("01_major_assets/05_livestream_smartphone.png"),
      className: "asset-consumer-phone",
      layer: "foreground",
      depth: 0.9,
      horizontalDepth: 0.42,
      rotate: -2,
      reactTo: ["buy-now", "compare-shops"]
    },
    {
      src: asset("02_lan_shopping_symbols/01_shopping_bag.png"),
      className: "asset-consumer-bag",
      layer: "midground",
      depth: 0.46,
      rotate: 4,
      reactTo: ["outside-brand"]
    },
    {
      src: asset("02_lan_shopping_symbols/02_heart_icon.png"),
      className: "asset-consumer-heart",
      layer: "background",
      depth: 0.26,
      rotate: -4,
      opacity: 0.72
    },
    {
      src: asset("02_lan_shopping_symbols/03_product_card.png"),
      className: "asset-consumer-card",
      layer: "midground",
      depth: 0.5,
      horizontalDepth: 0.6,
      rotate: 5,
      reactTo: ["compare-shops"]
    },
    {
      src: asset("02_lan_shopping_symbols/04_countdown_clock.png"),
      className: "asset-consumer-clock",
      layer: "foreground",
      depth: 0.72,
      rotate: -5,
      reactTo: ["buy-now"]
    },
    {
      src: asset("02_lan_shopping_symbols/05_discount_tag.png"),
      className: "asset-consumer-discount",
      layer: "foreground",
      depth: 0.76,
      rotate: 5,
      reactTo: ["buy-now"]
    }
  ],
  algorithm: [
    {
      src: asset("01_major_assets/07_algorithm_cube_only.png"),
      className: "asset-algo-cube",
      layer: "foreground",
      depth: 0.72,
      rotate: 3,
      reactTo: ["revenue-first", "new-sellers-quota", "ads-first"]
    },
    ...[
      "01_tshirt_card.png",
      "02_dress_card.png",
      "03_handbag_card.png",
      "04_cosmetic_bottle_card.png",
      "05_shoes_card.png",
      "06_headphones_card.png",
      "07_household_object_card.png",
      "08_small_accessory_watch_card.png"
    ].map((file, index) => ({
      src: asset(`03_product_cards/${file}`),
      className: `asset-algo-product asset-algo-product-${index + 1}`,
      layer: index % 3 === 0 ? "foreground" : "midground",
      depth: 0.36 + (index % 4) * 0.09,
      horizontalDepth: 0.5 + (index % 3) * 0.12,
      rotate: index % 2 === 0 ? 5 : -5,
      reactTo: index < 3 ? ["revenue-first", "new-sellers-quota"] : ["new-sellers-quota", "ads-first"],
      muteOn: index > 4 ? ["revenue-first"] : []
    })),
    {
      src: asset("07_constructivist_shapes/08_thin_connector_lines.png"),
      className: "asset-algo-lines",
      layer: "background",
      depth: 0.16,
      opacity: 0.48
    },
    {
      src: asset("07_constructivist_shapes/16_abstract_network_nodes.png"),
      className: "asset-algo-network",
      layer: "background",
      depth: 0.18,
      opacity: 0.42,
      reverse: true
    },
    {
      src: asset("07_constructivist_shapes/18_gold_circular_markers.png"),
      className: "asset-algo-markers",
      layer: "background",
      depth: 0.22,
      opacity: 0.58
    }
  ],
  fees: [
    {
      src: asset("01_major_assets/08_market_balance_scale.png"),
      className: "asset-fees-scale",
      layer: "foreground",
      depth: 0.75,
      rotate: 2,
      reactTo: ["flat-fee-rise", "tiered-fee", "cut-subsidy"]
    },
    {
      src: asset("05_platform_fee_symbols/01_percentage_symbol.png"),
      className: "asset-fees-percent",
      layer: "midground",
      depth: 0.38,
      rotate: 4,
      reactTo: ["flat-fee-rise"]
    },
    {
      src: asset("05_platform_fee_symbols/02_coin_stacks.png"),
      className: "asset-fees-coins",
      layer: "midground",
      depth: 0.32,
      reverse: true
    },
    {
      src: asset("05_platform_fee_symbols/03_upward_red_arrow.png"),
      className: "asset-fees-arrow",
      layer: "foreground",
      depth: 0.7,
      startY: -8,
      reactTo: ["flat-fee-rise"]
    },
    {
      src: asset("05_platform_fee_symbols/04_shrinking_profit_pie.png"),
      className: "asset-fees-pie",
      layer: "midground",
      depth: 0.42,
      muteOn: ["flat-fee-rise", "cut-subsidy"]
    },
    {
      src: asset("05_platform_fee_symbols/05_transaction_receipt.png"),
      className: "asset-fees-receipt",
      layer: "midground",
      depth: 0.46,
      rotate: -4
    },
    {
      src: asset("05_platform_fee_symbols/06_platform_fee_document.png"),
      className: "asset-fees-document",
      layer: "midground",
      depth: 0.38,
      reverse: true
    },
    {
      src: asset("05_platform_fee_symbols/07_falling_coins.png"),
      className: "asset-fees-falling",
      layer: "foreground",
      depth: 0.84,
      rotate: 3,
      reactTo: ["flat-fee-rise", "cut-subsidy"]
    }
  ],
  regulation: [
    {
      src: asset("01_major_assets/09_government_regulation.png"),
      className: "asset-regulation-main",
      layer: "foreground",
      depth: 0.62,
      horizontalDepth: 0.28,
      reactTo: ["self-regulate", "transparency-appeal", "strict-limits"]
    },
    {
      src: asset("04_market_participant_icons/01_small_shop_storefront.png"),
      className: "asset-regulation-shop",
      layer: "midground",
      depth: 0.36,
      reactTo: ["transparency-appeal", "strict-limits"]
    },
    {
      src: asset("04_market_participant_icons/02_independent_seller_silhouette.png"),
      className: "asset-regulation-seller",
      layer: "midground",
      depth: 0.44,
      reverse: true
    },
    {
      src: asset("04_market_participant_icons/03_consumer_silhouette.png"),
      className: "asset-regulation-consumer",
      layer: "midground",
      depth: 0.48,
      reactTo: ["transparency-appeal"]
    },
    {
      src: asset("07_constructivist_shapes/08_thin_connector_lines.png"),
      className: "asset-regulation-lines",
      layer: "background",
      depth: 0.16,
      opacity: 0.5
    },
    {
      src: asset("07_constructivist_shapes/19_corner_connector.png"),
      className: "asset-regulation-corner",
      layer: "background",
      depth: 0.18,
      opacity: 0.64
    },
    {
      src: asset("08_paper_collage_fragments/05_charcoal_torn_corner.png"),
      className: "asset-regulation-paper",
      layer: "background",
      depth: 0.12,
      opacity: 0.48
    }
  ],
  result: [
    {
      src: asset("01_major_assets/10_market_result_dashboard.png"),
      className: "asset-result-dashboard",
      layer: "foreground",
      depth: 0.68,
      rotate: 1.5
    },
    {
      src: asset("04_market_participant_icons/01_small_shop_storefront.png"),
      className: "asset-result-shop",
      layer: "midground",
      depth: 0.36
    },
    {
      src: asset("04_market_participant_icons/02_independent_seller_silhouette.png"),
      className: "asset-result-seller",
      layer: "midground",
      depth: 0.42,
      reverse: true
    },
    {
      src: asset("04_market_participant_icons/03_consumer_silhouette.png"),
      className: "asset-result-consumer",
      layer: "midground",
      depth: 0.45
    },
    {
      src: asset("07_constructivist_shapes/13_gold_square_marker.png"),
      className: "asset-result-square",
      layer: "background",
      depth: 0.18,
      opacity: 0.7
    },
    {
      src: asset("07_constructivist_shapes/18_gold_circular_markers.png"),
      className: "asset-result-markers",
      layer: "background",
      depth: 0.2,
      opacity: 0.62,
      reverse: true
    },
    {
      src: asset("08_paper_collage_fragments/03_small_cream_fragment.png"),
      className: "asset-result-paper",
      layer: "background",
      depth: 0.12,
      opacity: 0.58
    }
  ],
  reality: [
    {
      src: asset("06_real_world_data_assets/07_vietnamese_city_skyline.png"),
      className: "asset-reality-skyline",
      layer: "background",
      depth: 0.18,
      opacity: 0.72,
      reverse: true
    },
    {
      src: asset("07_constructivist_shapes/09_large_dotted_grid.png"),
      className: "asset-reality-grid",
      layer: "background",
      depth: 0.12,
      opacity: 0.28
    },
    {
      src: asset("08_paper_collage_fragments/04_long_cream_strip.png"),
      className: "asset-reality-strip",
      layer: "background",
      depth: 0.16,
      opacity: 0.55
    }
  ]
};

export const realityCardAssets = [
  [
    asset("06_real_world_data_assets/01_rising_bar_chart.png"),
    asset("06_real_world_data_assets/02_upward_line_graph.png")
  ],
  [asset("06_real_world_data_assets/03_market_share_pie_chart.png")],
  [
    asset("06_real_world_data_assets/04_parcel_volume_columns.png"),
    asset("06_real_world_data_assets/05_seller_network_diagram.png")
  ],
  [asset("06_real_world_data_assets/06_shopping_cart_up_arrow.png")],
  [asset("06_real_world_data_assets/08_economic_report_sheets.png")]
];
