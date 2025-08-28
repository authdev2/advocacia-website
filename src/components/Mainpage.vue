<template>
    <div class="main-page-container">
        <div class="left">
            <div class="container-seguranca">
                <div class="container-box">
                    <div class="box">
                        <img src="../assets/svg/padlock.svg" alt="">
                        <span>Segurança</span>
                    </div>
                    <div class="box">
                        <img src="../assets/svg/trust.svg" alt="">
                        <span>Lealdade</span>
    
                    </div>
                </div>

                <div class="title">
                    <h1>Defendemos os teus direitos​</h1>
                </div>
                <div class="description">
                    <p>Fale com o nosso team de advocacia pare revolver o teu problema</p>
                </div>
            </div>
        </div>
        <div class="right">
            <img src="../assets/mainpageImage.png" alt="">
        </div>
    </div>

    <div class="custom-shape-divider-bottom-1756387658">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
</template>

<style scoped>
    .main-page-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 90vh;
    }

    .main-page-container .left .container-box{
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .main-page-container .left .container-seguranca .box img{
        width: 20px;
        height: 20px;
    }

    .custom-shape-divider-bottom-1756387658 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.container-seguranca .box{
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 10px 20px;
    background-color: #84928D;
    border-radius: 30px;
    font-weight: 500;
    font-size: 14px;
}

.right img{
    width: 700px;
    height: 400px;
}

.custom-shape-divider-bottom-1756387658 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 59px;
}

.custom-shape-divider-bottom-1756387658 .shape-fill {
    fill: #84928D;
}
</style>