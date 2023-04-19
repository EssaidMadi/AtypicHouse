<template>
  <div>
    <TopHeader />
    <Menubar />
    <!-- Start Page Title Area -->
    <div class="page-title-area">
      <div class="container">
        <ul>
          <li><nuxt-link to="/">Accueil</nuxt-link></li>
          <li>Tout les biens</li>
        </ul>
      </div>
    </div>
    <!-- End Page Title Area -->

    <!-- Start Collections Area -->
    <div class="products-collections-area ptb-60">
      <div class="container">
        <div class="section-title">
          <h2><span class="dot"></span> Biens</h2>
        </div>

        <div class="row">
          <Sidebar
            @typeFiltered="updateTypeFilter"
            @priceFiltered="updatePriceFilter"
            @handlehQuery="updateSearchQuery"
          />
          <AllProducts
            :defaultType="defaultType"
            :type="typeFilter"
            :priceRange="priceFilter"
            :query="searchQuery"
          />
        </div>
      </div>
    </div>
    <!-- End Collections Area -->
  </div>
</template>

<script>
import TopHeader from '../layouts/TopHeader'
import Menubar from '../layouts/Menubar'
import Sidebar from '../components/all-products/Sidebar'
import AllProducts from '../components/all-products/AllProducts'

export default {
  head() {
    return {
      title: 'Atypikhouse - Biens',
      meta: [
        { hid: 'title', name: 'title', content: 'Atypikhouse - Biens' },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'Atypikhouse, Locations, Appartement à louer, Tiny, Cube, Yourt, Tente, Location en ligne',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Liste des locations de tout type et par prix',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Atypikhouse - Biens',
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Liste des locations de tout type et par prix',
        },
        { hid: 'og:image', property: 'og:image', content: '/icon.png' },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: 'Atypikhouse - Biens',
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: 'Liste des locations de tout type et par prix',
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: '/icon.png',
        },
      ],
    }
  },
  components: {
    TopHeader,
    Menubar,
    Sidebar,
    AllProducts,
  },
  data() {
    return {
      typeFilter: '',
      priceFilter: {},
      defaultType: '',
      searchQuery: '',
    }
  },
  methods: {
    updateTypeFilter(type) {
      this.typeFilter = type
    },
    updatePriceFilter(price) {
      this.priceFilter = price
    },
    updateSearchQuery(text){
      this.searchQuery = text
    }
  },
  created() {
    if (this.$route.query.cat && this.$route.query.cat != '') {
      this.defaultType = this.$route.query.cat
    }

    if (this.$route.query.crn && this.$route.query.crn != '') {
      this.searchQuery = this.$route.query.crn
    }
  },
}
</script>