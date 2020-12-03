<!--
 * @Author: ShenYuQiang
 * @Date: 2020-12-01 01:20:51
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-01 01:59:13
 * @FilePath: \h5ysxz\src\views\home\xiaozhen.vue
-->
<!--
 * @Author: ShenYuQiang
 * @Date: 2020-11-26 15:16:31
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-11-26 16:07:11
 * @FilePath: \h5ysxz\src\views\home\viewDetail.vue
-->
<template>
    <div id="Xiaozhen">
        <van-nav-bar
         left-arrow
         @click-left="onClickLeft"
         title="小镇简介"
         :fixed="true"
         z-index="999" />
        <img :src="xiaozhen01" />
        <div class="content">
        <h3><span>◆</span>小镇简介</h3>
        <p>
          XX小镇位于杭州市余杭区，地处长三角一体化发展战略的重要节点，
          以服装、时尚为主导产业，着力打造中国时尚新地标、创新创业新蓝海。
        </p>
        <p>
          小镇是余杭区政府与中国服装协会、中国服装设计师协会联合打造的“中国
          服装行业‘十三五’创新示范基地”、国家纺织服装创意设计试点园区，也还
          是中国轻工业出版社、北京《瑞丽》杂志共建的中国轻奢品牌孵化总部基地。
        </p>

        <img :src="xiaozhen02" />
        <p>
          小镇突出“一中心四街区”的空间格局，以X湖公园为中心，串联形成时尚艺
          术街区、时尚文化街区、时尚历史街区及瑞丽轻奢街区，承载时尚展示、教
          育、传播、交流、发布、交易、金融和休闲等业态功能。
        </p>
        <p>
          自2015年启动建设以来，形成了独具特色的时尚产业集聚，实现了从服装到
          艺术时尚的推动，从传统到科技融合，从本土到国际格局，从产业到产城生态的蝶变。
        </p>

        <h3><span>◆</span>X湖园</h3>
        <img :src="xiaozhen03" />

        <p>
          x湖公园是艺术、休闲、商业、文化活动的集聚地，位于小镇核心区块，由余杭区文化
          馆、XX小镇国际秀场、余杭区文化馆和杭州xxxxxxxx广场酒店和X湖公园组成，具有传
          播文化艺术、传递时尚信息、召开大型会议等功能。同时X湖公园也是观景休闲、散步健身的好去处。
        </p>

        <h3><span>◆</span>时尚文化街区</h3>
        <img :src="xiaozhen04" />

        <p>
          时尚文化街区全长1700余米，以汀兰街为界分布两侧，是一条时尚研发办公与时尚创客创业的文化
          创意街区。街区内风格各异的时尚建筑依傍北沙港水域而建，彰显自然人文之美，吸引了诸多国内
          外知名设计师工作室入驻街区，构成了“设计大师群落、产业配套集合、生活休闲中心”的街区特色
          文化。服装设计师的设计理念是时尚文化街区最美丽的风景。
        </p>

        <h3><span>◆</span>时尚艺术街区</h3>
        <img :src="xiaozhen05" />

        <p>
          时尚艺术街区，以引进中国艺尚中心项目为核心引擎，从国际时尚教育着手推进品牌设计的中国元素创新，是发展时尚产业总部集群。
        </p>

        <h3><span>◆</span>时尚历史街区</h3>
        <img :src="xiaozhen06" />
        <p>
          时尚历史街区位于迎宾路西侧，占地90余亩，保留了29幢农村自建房原有田园特色，进行“江南风”艺
          术化创新改造，形成大树林荫、小桥流水、生态花园与独栋办公室创意别墅错落有致、围合而成的生态主题产业社区。
        </p>

        <p>
          引入一批文化创意企业和电子商务企业，打造文创+互联网的城市新典范，创建电子商务与创意设计全产业链的互联网服务生态系统。
        </p>

        <h3><span>◆</span>瑞丽轻奢街区</h3>
        <img :src="xiaozhen07" />
        <p>
          瑞丽轻奢街区位于杭州市余杭区临平新城XX小镇核心区，距离杭州市区约20公里。它西至星河南路，北至永乐路，东至乔
          司港，南至望梅路，是一处具有“无处不轻奢、无处不智慧”特征的轻奢商街。瑞丽轻奢街区由我国时尚轻奢第一品牌“瑞丽”同余杭区政府共同打造。
        </p>

        <p>
          “瑞丽”是中国知名商标，被业内誉为中国时尚类期刊民族品牌，在中国和全球的时尚界有着非常特殊的重要意义。瑞丽轻奢街区以消费品产业为核
          心，以轻奢、创意为特色，以创建培育国际一流、具备全球竞争优势的轻奢品牌为目标，打造中国轻奢品牌行业标准街区。
        </p>
        </div>

    </div>
</template>
<script>
import useIconImp from '../../composable/iconImp'
export default {
  setup () {
    const { lunbo01, xiaozhen01, xiaozhen02, xiaozhen03, xiaozhen04, xiaozhen05, xiaozhen06, xiaozhen07 } = useIconImp()

    return { lunbo01, xiaozhen01, xiaozhen02, xiaozhen03, xiaozhen04, xiaozhen05, xiaozhen06, xiaozhen07 }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    }
  }

}
</script>
<style lang="less" scoped>
    #Xiaozhen{
        width:100%;
        height: 100%;
        padding-top: 46px;
        background-color: #F6F5FA;
        img{
          display: block;
          width:100%;
          height:193px;
        }
        .content{
          padding: 32px 16px 0 16px;

          h3{
            width: 100%;
            font-size: 20px;
            font-weight: 400;
            color: #0F1826;
            line-height: 28px;
            span{
              color: #1CA4EF;
              font-size: 20px;
              line-height: 20px;
              margin-right: 20px;
            }
          }
          p{
            width: 100%;
            font-size: 14px;
            font-weight: 400;
            color: #0F1826;
            line-height: 24px;
          }
        }
    }
</style>
