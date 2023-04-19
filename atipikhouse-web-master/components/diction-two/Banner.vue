<template>
  <ClientOnly>
    <div class="home-slides owl-carousel owl-theme">
      <carousel
        :autoplay="true"
        :autoplayTimeout="3000"
        :navigationEnabled="true"
        navigationNextLabel="<i class='fas fa-arrow-right'></i>"
        navigationPrevLabel="<i class='fas fa-arrow-left'></i>"
        :paginationEnabled="true"
        :perPage="1"
      >
        <slide>
          <div class="main-banner item-bg2">
            <div class="d-table">
              <div class="d-table-cell">
                <div class="container">
                  <div class="main-banner-content">
                    <span>Yourt</span>
                    <h1 style="color: #fff;">Yourt à louer</h1>

                    <a href="#" class="btn btn-primary">Location</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slide>

        <slide>
          <div class="main-banner item-bg1">
            <div class="d-table">
              <div class="d-table-cell">
                <div class="container">
                  <div class="main-banner-content">
                    <span>Tente</span>
                    <h1 style="color: #fff;">Tente à louer</h1>

                    <a href="#" class="btn btn-primary">Location</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slide>

        <slide>
          <div class="main-banner item-bg3">
            <div class="d-table">
              <div class="d-table-cell">
                <div class="container">
                  <div class="main-banner-content">
                    <span>Le cude</span>
                    <h1 style="color: #fff;">Maison à louer</h1>

                    <a href="#" class="btn btn-primary">Location</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </ClientOnly>
</template>

<script>
export default {
  name: 'Banner',
}
</script>