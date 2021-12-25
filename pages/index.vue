<template>
  <div style="background: #0A0A0A;">
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark">
      <div class="container">
        <a class="navbar-brand logo-image" href="index.html"><img src="~/assets/images/logo.png" alt="alternative"></a>
        <button class="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link page-scroll" href="#about">About <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link page-scroll" href="#features">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link page-scroll" href="#tokenomic">Tokenomics</a>
            </li>
            <li class="nav-item">
              <a class="nav-link page-scroll" href="#roadmap">Roadmap</a>
            </li>
            <li class="nav-item">
              <a class="nav-link page-scroll" href="#battle">NFT item</a>
            </li>
            <li class="nav-item">
              <a class="nav-link page-scroll" href="#partner">Partner</a>
            </li>
            <li class="nav-item">
              <a class="nav-link page-scroll" href="javascript:void(0);">Staking</a>
            </li>
          </ul>
          <span class="nav-item social-icons">
            <button class="btn btn-connect" @click="openConnect = true">Connect wallet</button>
          </span>
        </div>
      </div>
    </nav>
    <header id="header" class="header">
      <div class="container">
        <div class="row">
          <div class="col-lg-6  wow fadeInLeft">
            <h1 class="title color-main">STAKE</h1>
            <h1 class="title">YOUR STMAN</h1>
            <p class="sub-title">Profitable Staking & Yield Farming Ecosystem</p>
            <p class="sub-description">Earning rewards and shared revenue through staking & yield farming pool with
              lucrative APR & APY along with lower or no gas fee.</p>
          </div>
        </div>
      </div>
    </header>
    <div class="row stake-overview mb-3 mx-0">
      <div class="stake-overview-item col-12 col-lg-4 col-md-4 col-sm-12">
        <p>Number of Stakers</p>
        <p class="h2-heading m-0">2132</p>
      </div>
      <div class="stake-overview-item col-12 col-lg-4 col-md-4 col-sm-12">
        <p>Total STMAN Staked</p>
        <p class="h2-heading m-0">7,898,873</p>
      </div>
      <div class="stake-overview-item col-12 col-lg-4 col-md-4 col-sm-12">
        <p>Total Value locked</p>
        <p class="h2-heading m-0">$592,416</p>
      </div>
    </div>
    <div class="container">
      <div class="row stake-container mb-5">
        <div class="col-12 col-lg-5 col-md-5 col-sm-12">
          <div class="box staking-value">
            <div class="row">
              <div class="col-8">
                <p class="mb-1">Your Staking Value</p>
                <p class="staking-value-number m-0">5,256 BNB</p>
              </div>
              <div class="col-4">
                <p class="mb-1">APY</p>
                <p class="staking-value-number m-0">9%</p>
              </div>
            </div>
          </div>
          <button class="btn locking-time mb-3">1 month locked</button>
        </div>
        <div class=" col-12 col-lg-7 col-md-7 col-sm-12">
          <div class="staking-form p-lg-5 p-md-4 p-sm-3 p-3">
            <div class="row pack-container">
              <div class="col-12">
                <div class="row mb-3">
                  <div class="col-4 d-flex align-items-center">
                    <p class="m-0 pack-title">Pack 1</p>
                  </div>
                  <div class="col-8 d-flex align-items-center justify-content-end">
                    <div class="pack-value">12,562 STMAN</div>
                  </div>
                </div>
                <div class="row mb-2">
                  <div class="col-4 d-flex align-items-center">
                    <p class="m-0 grey-label">Start date</p>
                  </div>
                  <div class="col-8 d-flex align-items-center justify-content-end">
                    <div class="text-white form-value-label">22 Oct 2021 9:00 UTC</div>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-4 d-flex align-items-center">
                    <p class="m-0 grey-label">End date</p>
                  </div>
                  <div class="col-8 d-flex align-items-center justify-content-end">
                    <div class="text-white form-value-label">22 Nov 2021 9:00 UTC</div>
                  </div>
                </div>
                <p class="text-white form-value-label mb-1">STMAN Earned</p>
                <div class="row">
                  <div class="col-12 col-lg-8 col-md-8 col-sm-12">
                    <input type="text" value="2,160 STMAN" class="form-control form-input">
                    <button class="btn btn-harvest disabled">Harvest</button>
                  </div>
                  <div class="col-12 col-lg-4 col-md-4 col-sm-12 d-flex justify-content-lg-end justify-content-md-end justify-content-sm-center justify-content-center mt-2 mt-lg-0 mt-md-0 mt-sm-2">
                    <button class="btn btn-withdraw disabled">Withdraw</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row pack-container">
              <div class="col-12">
                <div class="row mb-3">
                  <div class="col-4 d-flex align-items-center">
                    <p class="m-0 pack-title">Pack 2</p>
                  </div>
                  <div class="col-8 d-flex align-items-center justify-content-end">
                    <div class="pack-value">12,562 STMAN</div>
                  </div>
                </div>
                <div class="row mb-2">
                  <div class="col-4 d-flex align-items-center">
                    <p class="m-0 grey-label">Start date</p>
                  </div>
                  <div class="col-8 d-flex align-items-center justify-content-end">
                    <div class="text-white form-value-label">22 Oct 2021 9:00 UTC</div>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-4 d-flex align-items-center">
                    <p class="m-0 grey-label">End date</p>
                  </div>
                  <div class="col-8 d-flex align-items-center justify-content-end">
                    <div class="text-white form-value-label">22 Nov 2021 9:00 UTC</div>
                  </div>
                </div>
                <p class="text-white form-value-label mb-1">STMAN Earned</p>
                <div class="row">
                  <div class="col-12 col-lg-8 col-md-8 col-sm-12">
                    <input type="text" value="1,860 STMAN" class="form-control form-input">
                    <button class="btn btn-harvest">Harvest</button>
                  </div>
                  <div class="col-12 col-lg-4 col-md-4 col-sm-12 d-flex justify-content-lg-end justify-content-md-end justify-content-sm-center justify-content-center mt-2 mt-lg-0 mt-md-0 mt-sm-2">
                    <button class="btn btn-withdraw"><span>Withdraw</span></button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row pack-container">
              <div class="col-12">
                <div class="row mb-3">
                  <div class="col-12 d-flex align-items-center">
                    <p class="m-0 pack-title">STMAN AVAILABLE - STAKED</p>
                  </div>
                </div>
                <div class="row mb-2">
                  <div class="col-4 d-flex align-items-center">
                    <p class="m-0 grey-label">Available</p>
                  </div>
                  <div class="col-8 d-flex align-items-center justify-content-end">
                    <div class="text-white form-value-label">15,256.264789 STMAN</div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-4 d-flex align-items-center">
                    <p class="m-0 grey-label">Staked</p>
                  </div>
                  <div class="col-8 d-flex align-items-center justify-content-end">
                    <div class="text-white form-value-label">42,562 STMAN</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row pack-container">
              <div class="col-12">
                <div class="row mb-3">
                  <div class="col-12 d-flex align-items-center">
                    <p class="m-0 pack-title"><span class="title-gradient">STAKE</span></p>
                  </div>
                </div>
                <div class="row mb-2">
                  <div class="col-4 d-flex align-items-center">
                    <p class="m-0 grey-label">Stake amount</p>
                  </div>
                  <div class="col-8 d-flex align-items-center justify-content-end">
                    <div class="grey-label">Available amount: 15,256.264 STMAN</div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <input type="text" value="10,256.2620" class="form-control stake-amount">
                  </div>
                </div>
                <div class="row mt-5">
                  <div class="col-12">
                    <range-picker></range-picker>
                  </div>
                </div>
              </div>
            </div>
            <div class="row stake-submit">
              <div class="col-12">
                <button class="btn btn-stake disabled text-white">Stake</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hr"></div>
    <div class="basic-2" id="partner">
      <div class="container stake-container">
        <div class="row">
          <div class="col-lg-12 wow fadeInUp">
            <h2 class="h2-heading  wow fadeInUp">Backed by</h2>
            <p class="p-heading">
              In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in which
              knowledge about space can be both a priori and synthetic. </p>
            <div class="partner-content  wow fadeInUp">
              <div class="partner">
                <img src="~/assets/images/partner/raptor-capital.png" alt="">
              </div>
              <div class="partner">
                <img src="~/assets/images/partner/bsc-daily.png" alt="">
              </div>
              <div class="partner">
                <img src="~/assets/images/partner/hub.png" alt="">
              </div>
              <div class="partner">
                <img src="~/assets/images/partner/redkite.png" alt="">
              </div>
              <div class="partner">
                <img src="~/assets/images/partner/coingecko.png" alt="">
              </div>
              <div class="partner">
                <img src="~/assets/images/partner/morning-star.png" alt="">
              </div>
              <div class="partner">
                <img src="~/assets/images/partner/gamefi.png" alt="">
              </div>
              <div class="partner">
                <img src="~/assets/images/partner/basic-capital.png" alt="">
              </div>
              <div class="partner">
                <img src="~/assets/images/partner/labs.png" alt="">
              </div>
              <div class="partner">
                <img src="~/assets/images/partner/nebula.png" alt="">
              </div>
              <div class="partner">
                <img src="~/assets/images/partner/crypto-venture.png" alt="">
              </div>
              <div class="partner">
                <img src="~/assets/images/partner/fomocraft.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 d-flex wow fadeInUp">
            <div class="mr-auto  ml-auto">
              <div class="d-flex justify-content-center">
                <img class="footer-logo" src="~/assets/images/footer-logo.png" alt="">
              </div>
              <p class="our">Join Our Community</p>
              <div class="d-flex justify-content-center align-items-center">
                <div class="social">
                  <img src="~/assets/images/social/facebook.png" alt="">
                </div>
                <div class="social">
                  <img src="~/assets/images/social/telegram.png" alt="">
                </div>
                <div class="social">
                  <img src="~/assets/images/social/twitter.png" alt="">
                </div>
                <div class="social">
                  <img src="~/assets/images/social/discord.png" alt="">
                </div>
                <div class="social">
                  <img src="~/assets/images/social/gmail.png" alt="">
                </div>
              </div>
              <p class="copyright">Copyright © 2021 Stickman's Battlegrounds</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import RangePicker from '../components/RangePicker';
  export default {
    components: { RangePicker },
    layout: 'default',
    head() {
      return {
        script: [
          {
            type: 'text/javascript',
            src: '/js/jquery.min.js',
            body: true,
          },
          {
            type: 'text/javascript',
            src: '/js/bootstrap.min.js',
            body: true
          },
          {
            type: 'text/javascript',
            src: '/js/jquery.easing.min.js',
            body: true,
          },
          {
            type: 'text/javascript',
            src: '/js/swiper.min.js',
            body: true,
          },
          {
            type: 'text/javascript',
            src: '/js/jquery.magnific-popup.js',
            body: true,
          },
          {
            type: 'text/javascript',
            src: '/js/chart.min.js',
            body: true,
          },
          {
            type: 'text/javascript',
            src: '/js/wow.min.js',
            body: true,
          },
          {
            type: 'text/javascript',
            src: '/js/scripts.js',
            body: true,
          },
        ],
      };
    },
    data: () => ({
      openConnect: false,
      msg: "This is demo net work",
    }),
    methods: {
      onComplete(data){
        console.log('data:', data);
        this.openConnect = false;
      }
    },
  };
</script>
<style lang="css" scoped>
  .stake-container {
    margin-top: 100px;
  }

  .staking-value {
    max-width: 448px;
    height: 120px;
    background: linear-gradient(180deg, #0EAD32 0%, #82CE0F 109.66%);
    border-radius: 8px;
    padding: 24px;
  }

  .locking-time {
    padding: 8px;
    max-width: 148px;
    height: 40px;
    border: 1px solid transparent;
    border-radius: 8px;
    background: linear-gradient(#0A0A0A, #0A0A0A) padding-box, linear-gradient(to bottom, #0EAD32, #82CE0F) border-box;
    color: #ffffff;
    display: inline-block;
    margin-top: 16px;
  }

  .staking-value-number {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: #FFFFFF;
  }

  .pack-container:not(:first-child) {
    padding-top: 32px;
    border-top: 1px solid #3B3B3B;
  }

  .pack-container:not(:first-child) {
    margin-top: 36px;
  }

  .staking-form {
    max-width: 640px;
    background: #0A0A0A;
    border: 2px solid #3B3B3B;
    box-sizing: border-box;
    border-radius: 12px;
    padding: 40px;
  }

  .pack-value {
    padding: 4px 12px;
    height: 32px;
    background: linear-gradient(177.18deg, #11BD37 -5.17%, #89DB0E 125.96%, #71B50C 125.96%);
    border-radius: 6px;
  }

  .pack-title {
    border-left: 2px solid transparent;
    padding: 0 6px;
    background: linear-gradient(#0A0A0A, #0A0A0A) padding-box, linear-gradient(to bottom, #33F75F, #B4FF43) border-box;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
  }

  .grey-label {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #94989E;
  }

  .form-value-label {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
  }

  .form-input {
    max-width: 380px;
    height: 52px;
    background: #0A0A0A;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 8px;
    color: #FFFFFF;
  }

  .btn-harvest {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 32px;
    position: absolute;
    max-width: 93px;
    height: 40px;
    border-radius: 6px;
    top: 6px;
    right: 22px;
    color: #FFFFFF;
    background: linear-gradient(180deg, #11BD37 -7.89%, #89DB0E 121.43%, #71B50C 121.43%);
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }

  .btn-harvest.disabled {
    background: #041314;
    color: #94989E;
  }

  .btn-withdraw {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 32px;
    width: 140px;
    height: 52px;

    box-sizing: border-box;
    border-radius: 6px;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid transparent;
    background: linear-gradient(#0A0A0A, #0A0A0A) padding-box, linear-gradient(to bottom, #0EAD32, #82CE0F) border-box;
  }

  .btn-withdraw span {
    background: -webkit-linear-gradient(#33F65F, #B4FF43);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .title-gradient {
    background: -webkit-linear-gradient(#33F65F, #B4FF43);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .btn-withdraw.disabled {
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: #0A0A0A;
  }

  .btn-withdraw.disabled span {
    background: unset;
    color: #94989E;
  }

  .stake-amount {
    max-width: 560px;
    height: 72px;
    background: #0A0A0A;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 8px;
    color: #FFFFFF;
  }

  .btn-stake {
    width: 100%;
    height: 60px;
    background: linear-gradient(180deg, #11BD37 -7.89%, #89DB0E 121.43%, #71B50C 121.43%);
    border-radius: 6px;
  }

  .stake-submit {
    margin-top: 100px;
  }
</style>
