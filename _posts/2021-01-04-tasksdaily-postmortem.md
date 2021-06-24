---
title: My final project for CS50 Web - A TasksDaily Postmortem
author: gonvalhector
image: https://lh3.googleusercontent.com/pw/ACtC-3dOBrnWCZSTxLn5GlfY1ollOQCMusoZ6khWnBKoDK9rzHg5oYWnzT7GrW5t-CjkqC-JqcfLU5FHZcgH5y5uUhfkjW7rMgNfmtfo1MPsbfsbOch1w3c4n9GOvDZ8aNdCdxwuqNcHYOvPsjL50V6xrtC2=w1200-h630-no?authuser=0
---

## The original idea

I started my [Final Project <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">] for the [CS50’s Web Programming with Python and JavaScript <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">] course with the intention of remaking my [Fitness Programmer] web app, which was my final project for the last course ([CS50's Introduction to Computer Science <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">]), within the [Django <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">] framework.  
I wanted to submit the project before the second half of 2020 and I had the goals of putting the app online so that people could finally use it, and of adding many features which would have made the app much more accessible, customizable and simple.  

<div class="embed-responsive embed-responsive-16by9 my-3">
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/hF-qanTC6pA?rel=0" allowfullscreen=""></iframe>
</div>

I got as far as setting up a [GitHub <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">] repository with the [Django <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">] project before I realized just how much time it would take me to remake the original project with no prior experience porting apps from [Flask <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">] to [Django <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">]. So, since I still had time before the deadline I had set for myself, I decided to teach myself how to do that with an easier project, one of the previous project sets I submitted, [R8Books].  
After successfully putting that one online, I got caught up trying to balance other endeavors, which made me miss the original deadline.
Now, knowing just how skillful I became at missing deadlines, I had to settle for a new, simpler idea for the final project.

## The simpler idea

Trying to balance all these things within my schedule, led me to create a daily objectives list of sorts in one of my [bullet journal <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">]s in order to improve my productivity and accountability. At the time, I wasn't using that particular journal for bullet journaling, so I didn't exactly follow the proper syntax when writing my daily objectives. I really only needed a simple checklist with my daily tasks and to check them if I successfully completed them.  
As I missed some days here and there, I realized just how much of a difference it made using the list. I was considerably more productive and much more likely to meet my goals the days I'd go over it.  
So that was it, the new idea was to turn paper into app.

<div id="carousel1" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carousel1" data-slide-to="0" class="active"></li>
        <li data-target="#carousel1" data-slide-to="1"></li>
        <li data-target="#carousel1" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <a href="https://lh3.googleusercontent.com/pw/ACtC-3fKzSft7pRZfMArXcxsmjIGLdiA_DLxXJE9LbkgTTgC88yl66ZWfQYsi5k_syCOIkBb4YsGEVixvTHefMKHlC_UQRI5R3QI7BgFi9poSHRPl1lAh3YqKFAu8v2J6643NdXh6J3a4drYBs24zbVASWr-=w1440-h1080-no?authuser=0"><picture>
               <source media="(min-width: 1920px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3f_8JSLwJHQeu70EkkZLB13M3sfRtIPc8GKYwtEDeegkRAFAjGDaLsJtgS24i2CvM2U29iD9TpNtsvpsN0R_64mYP3K-4XZViqNN7iDNzlB5w1O8ACP5JwFAsfYWndUllHdG1h4RytGx5Vvna772UE5=w850">
               <source media="(min-width: 1920px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3cYM4ncAjj0Cr32o5OEDA9QGSYvxG-jBvEItkL2IrRZu9GutPdfob8YHtw6rWx7pSmhkZwW7BOIw8MYI_oiGRGPnqL5-tmZEyKcGab1ixaRvnfRHF1s-QDN7sTjTmxWukEYGVK2a-hi1SdhOOFef3aC=w850">
               <source media="(min-width: 1024px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3f_8JSLwJHQeu70EkkZLB13M3sfRtIPc8GKYwtEDeegkRAFAjGDaLsJtgS24i2CvM2U29iD9TpNtsvpsN0R_64mYP3K-4XZViqNN7iDNzlB5w1O8ACP5JwFAsfYWndUllHdG1h4RytGx5Vvna772UE5=w711">
               <source media="(min-width: 1024px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3cYM4ncAjj0Cr32o5OEDA9QGSYvxG-jBvEItkL2IrRZu9GutPdfob8YHtw6rWx7pSmhkZwW7BOIw8MYI_oiGRGPnqL5-tmZEyKcGab1ixaRvnfRHF1s-QDN7sTjTmxWukEYGVK2a-hi1SdhOOFef3aC=w711">
               <source media="(min-width: 768px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3f_8JSLwJHQeu70EkkZLB13M3sfRtIPc8GKYwtEDeegkRAFAjGDaLsJtgS24i2CvM2U29iD9TpNtsvpsN0R_64mYP3K-4XZViqNN7iDNzlB5w1O8ACP5JwFAsfYWndUllHdG1h4RytGx5Vvna772UE5=w533">
               <source media="(min-width: 768px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3cYM4ncAjj0Cr32o5OEDA9QGSYvxG-jBvEItkL2IrRZu9GutPdfob8YHtw6rWx7pSmhkZwW7BOIw8MYI_oiGRGPnqL5-tmZEyKcGab1ixaRvnfRHF1s-QDN7sTjTmxWukEYGVK2a-hi1SdhOOFef3aC=w533">
               <source media="(min-width: 600px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3f_8JSLwJHQeu70EkkZLB13M3sfRtIPc8GKYwtEDeegkRAFAjGDaLsJtgS24i2CvM2U29iD9TpNtsvpsN0R_64mYP3K-4XZViqNN7iDNzlB5w1O8ACP5JwFAsfYWndUllHdG1h4RytGx5Vvna772UE5=w416">
               <source media="(min-width: 600px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3cYM4ncAjj0Cr32o5OEDA9QGSYvxG-jBvEItkL2IrRZu9GutPdfob8YHtw6rWx7pSmhkZwW7BOIw8MYI_oiGRGPnqL5-tmZEyKcGab1ixaRvnfRHF1s-QDN7sTjTmxWukEYGVK2a-hi1SdhOOFef3aC=w416">
               <source media="(min-width: 411px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3f_8JSLwJHQeu70EkkZLB13M3sfRtIPc8GKYwtEDeegkRAFAjGDaLsJtgS24i2CvM2U29iD9TpNtsvpsN0R_64mYP3K-4XZViqNN7iDNzlB5w1O8ACP5JwFAsfYWndUllHdG1h4RytGx5Vvna772UE5=w285">
               <source media="(min-width: 411px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3cYM4ncAjj0Cr32o5OEDA9QGSYvxG-jBvEItkL2IrRZu9GutPdfob8YHtw6rWx7pSmhkZwW7BOIw8MYI_oiGRGPnqL5-tmZEyKcGab1ixaRvnfRHF1s-QDN7sTjTmxWukEYGVK2a-hi1SdhOOFef3aC=w285">
               <source media="(min-width: 360px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3f_8JSLwJHQeu70EkkZLB13M3sfRtIPc8GKYwtEDeegkRAFAjGDaLsJtgS24i2CvM2U29iD9TpNtsvpsN0R_64mYP3K-4XZViqNN7iDNzlB5w1O8ACP5JwFAsfYWndUllHdG1h4RytGx5Vvna772UE5=w250">
               <source media="(min-width: 360px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3cYM4ncAjj0Cr32o5OEDA9QGSYvxG-jBvEItkL2IrRZu9GutPdfob8YHtw6rWx7pSmhkZwW7BOIw8MYI_oiGRGPnqL5-tmZEyKcGab1ixaRvnfRHF1s-QDN7sTjTmxWukEYGVK2a-hi1SdhOOFef3aC=w250">
               <source media="(min-width: 240px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3f_8JSLwJHQeu70EkkZLB13M3sfRtIPc8GKYwtEDeegkRAFAjGDaLsJtgS24i2CvM2U29iD9TpNtsvpsN0R_64mYP3K-4XZViqNN7iDNzlB5w1O8ACP5JwFAsfYWndUllHdG1h4RytGx5Vvna772UE5=w166">
               <img class="my-3 mx-auto d-block" src="https://lh3.googleusercontent.com/pw/ACtC-3cYM4ncAjj0Cr32o5OEDA9QGSYvxG-jBvEItkL2IrRZu9GutPdfob8YHtw6rWx7pSmhkZwW7BOIw8MYI_oiGRGPnqL5-tmZEyKcGab1ixaRvnfRHF1s-QDN7sTjTmxWukEYGVK2a-hi1SdhOOFef3aC" alt="Photo of a journal">
            </picture></a>
        </div>
        <div class="carousel-item">
            <a href="https://lh3.googleusercontent.com/pw/ACtC-3cG2nkeMG9lvBwVK6y-My3XykL1CobZuurZrj23-hKQ9GtVNU-nOYPeQ_-1lSK_wGyniF9e9hyOkLGWdhNMzN6g_-txUV59OPFbQVNelNzG07rIWzT14j_GpOeAPPB3mWctm4jjFWfbdYEwH4Q9jDOO=w1440-h1080-no?authuser=0"><picture>
               <source media="(min-width: 1920px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3c-va-hvImOUtrrd4h-okkUMqhk0YogLf8waR8BTQL9v8BbdZ41z7uREPzOs8RxcYOpV_RSf28v4yNyfBkLESmaLvbOjax31hALUM8E0ndOmbIbrOy6nesHvRinUae1pfx2MhI_AhoGvel0ag-NfLUe=w850">
               <source media="(min-width: 1920px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3emwDzRQ1t1wIMb6Gr1lh2pZSRNa6MGC6t2kBQ8NQzSLWz8-_gGlA5LNoqxr_RKT5HHRHWmgLnWjBe_GvMmuNiOMk5JtRQuAGWfdQZL4JwnCdmWoAxZbmW2qmfvHvii-FQWeGg5xzZrSBzhk3_KAcZf=w850">
               <source media="(min-width: 1024px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3c-va-hvImOUtrrd4h-okkUMqhk0YogLf8waR8BTQL9v8BbdZ41z7uREPzOs8RxcYOpV_RSf28v4yNyfBkLESmaLvbOjax31hALUM8E0ndOmbIbrOy6nesHvRinUae1pfx2MhI_AhoGvel0ag-NfLUe=w711">
               <source media="(min-width: 1024px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3emwDzRQ1t1wIMb6Gr1lh2pZSRNa6MGC6t2kBQ8NQzSLWz8-_gGlA5LNoqxr_RKT5HHRHWmgLnWjBe_GvMmuNiOMk5JtRQuAGWfdQZL4JwnCdmWoAxZbmW2qmfvHvii-FQWeGg5xzZrSBzhk3_KAcZf=w711">
               <source media="(min-width: 768px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3c-va-hvImOUtrrd4h-okkUMqhk0YogLf8waR8BTQL9v8BbdZ41z7uREPzOs8RxcYOpV_RSf28v4yNyfBkLESmaLvbOjax31hALUM8E0ndOmbIbrOy6nesHvRinUae1pfx2MhI_AhoGvel0ag-NfLUe=w533">
               <source media="(min-width: 768px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3emwDzRQ1t1wIMb6Gr1lh2pZSRNa6MGC6t2kBQ8NQzSLWz8-_gGlA5LNoqxr_RKT5HHRHWmgLnWjBe_GvMmuNiOMk5JtRQuAGWfdQZL4JwnCdmWoAxZbmW2qmfvHvii-FQWeGg5xzZrSBzhk3_KAcZf=w533">
               <source media="(min-width: 600px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3c-va-hvImOUtrrd4h-okkUMqhk0YogLf8waR8BTQL9v8BbdZ41z7uREPzOs8RxcYOpV_RSf28v4yNyfBkLESmaLvbOjax31hALUM8E0ndOmbIbrOy6nesHvRinUae1pfx2MhI_AhoGvel0ag-NfLUe=w416">
               <source media="(min-width: 600px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3emwDzRQ1t1wIMb6Gr1lh2pZSRNa6MGC6t2kBQ8NQzSLWz8-_gGlA5LNoqxr_RKT5HHRHWmgLnWjBe_GvMmuNiOMk5JtRQuAGWfdQZL4JwnCdmWoAxZbmW2qmfvHvii-FQWeGg5xzZrSBzhk3_KAcZf=w416">
               <source media="(min-width: 411px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3c-va-hvImOUtrrd4h-okkUMqhk0YogLf8waR8BTQL9v8BbdZ41z7uREPzOs8RxcYOpV_RSf28v4yNyfBkLESmaLvbOjax31hALUM8E0ndOmbIbrOy6nesHvRinUae1pfx2MhI_AhoGvel0ag-NfLUe=w285">
               <source media="(min-width: 411px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3emwDzRQ1t1wIMb6Gr1lh2pZSRNa6MGC6t2kBQ8NQzSLWz8-_gGlA5LNoqxr_RKT5HHRHWmgLnWjBe_GvMmuNiOMk5JtRQuAGWfdQZL4JwnCdmWoAxZbmW2qmfvHvii-FQWeGg5xzZrSBzhk3_KAcZf=w285">
               <source media="(min-width: 360px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3c-va-hvImOUtrrd4h-okkUMqhk0YogLf8waR8BTQL9v8BbdZ41z7uREPzOs8RxcYOpV_RSf28v4yNyfBkLESmaLvbOjax31hALUM8E0ndOmbIbrOy6nesHvRinUae1pfx2MhI_AhoGvel0ag-NfLUe=w250">
               <source media="(min-width: 360px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3emwDzRQ1t1wIMb6Gr1lh2pZSRNa6MGC6t2kBQ8NQzSLWz8-_gGlA5LNoqxr_RKT5HHRHWmgLnWjBe_GvMmuNiOMk5JtRQuAGWfdQZL4JwnCdmWoAxZbmW2qmfvHvii-FQWeGg5xzZrSBzhk3_KAcZf=w250">
               <source media="(min-width: 240px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3c-va-hvImOUtrrd4h-okkUMqhk0YogLf8waR8BTQL9v8BbdZ41z7uREPzOs8RxcYOpV_RSf28v4yNyfBkLESmaLvbOjax31hALUM8E0ndOmbIbrOy6nesHvRinUae1pfx2MhI_AhoGvel0ag-NfLUe=w166">
               <img class="my-3 mx-auto d-block" src="https://lh3.googleusercontent.com/pw/ACtC-3emwDzRQ1t1wIMb6Gr1lh2pZSRNa6MGC6t2kBQ8NQzSLWz8-_gGlA5LNoqxr_RKT5HHRHWmgLnWjBe_GvMmuNiOMk5JtRQuAGWfdQZL4JwnCdmWoAxZbmW2qmfvHvii-FQWeGg5xzZrSBzhk3_KAcZf" alt="Photo of a closed journal">
            </picture></a>
        </div>
        <div class="carousel-item">
            <a href="https://lh3.googleusercontent.com/pw/ACtC-3cgVXWfIPa4LePrk7VoTxYu8SmLgqGBfzYZVr8723fencSqpbyDUIzw1bI1YejJNaFBddLu44rQSFhPesnq8qg3h1eHcqjiROQRbPS5KXttBBPEmvT1nXQAGUY1idgRAE_JRD8-C8Z7hnl4M-Ye3oDE=w1440-h1080-no?authuser=0"><picture>
               <source media="(min-width: 1920px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3e3gYekO892M18Sy4iNQutlp4ig6NklPmP6wZQNpCjLu_xhuzy5uEzLVGRzPaC1gfkNz83M6RdLR92L1mHzKGCi5UvT_OpBjH1mlHn2CN2aAxXI3Ao-0nhq-NIH-noTvsGnVzwiM-CVJMisXDLdE5lv=w850">
               <source media="(min-width: 1920px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3dOoa7-c-bhJS1bFT2IE-Is3lPchD9FyAX7Iko_o-zES-XioQ_Qo-eTqB9wpGJZdppaoqIUseRN6RHx3acRU7QM2t_Jz-tHRj3J5Nhr17did6cyNKqdbqkdyG8oKw9FjQuqHv88pbgMLJvbRCIOumgb=w850">
               <source media="(min-width: 1024px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3e3gYekO892M18Sy4iNQutlp4ig6NklPmP6wZQNpCjLu_xhuzy5uEzLVGRzPaC1gfkNz83M6RdLR92L1mHzKGCi5UvT_OpBjH1mlHn2CN2aAxXI3Ao-0nhq-NIH-noTvsGnVzwiM-CVJMisXDLdE5lv=w711">
               <source media="(min-width: 1024px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3dOoa7-c-bhJS1bFT2IE-Is3lPchD9FyAX7Iko_o-zES-XioQ_Qo-eTqB9wpGJZdppaoqIUseRN6RHx3acRU7QM2t_Jz-tHRj3J5Nhr17did6cyNKqdbqkdyG8oKw9FjQuqHv88pbgMLJvbRCIOumgb=w711">
               <source media="(min-width: 768px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3e3gYekO892M18Sy4iNQutlp4ig6NklPmP6wZQNpCjLu_xhuzy5uEzLVGRzPaC1gfkNz83M6RdLR92L1mHzKGCi5UvT_OpBjH1mlHn2CN2aAxXI3Ao-0nhq-NIH-noTvsGnVzwiM-CVJMisXDLdE5lv=w533">
               <source media="(min-width: 768px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3dOoa7-c-bhJS1bFT2IE-Is3lPchD9FyAX7Iko_o-zES-XioQ_Qo-eTqB9wpGJZdppaoqIUseRN6RHx3acRU7QM2t_Jz-tHRj3J5Nhr17did6cyNKqdbqkdyG8oKw9FjQuqHv88pbgMLJvbRCIOumgb=w533">
               <source media="(min-width: 600px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3e3gYekO892M18Sy4iNQutlp4ig6NklPmP6wZQNpCjLu_xhuzy5uEzLVGRzPaC1gfkNz83M6RdLR92L1mHzKGCi5UvT_OpBjH1mlHn2CN2aAxXI3Ao-0nhq-NIH-noTvsGnVzwiM-CVJMisXDLdE5lv=w416">
               <source media="(min-width: 600px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3dOoa7-c-bhJS1bFT2IE-Is3lPchD9FyAX7Iko_o-zES-XioQ_Qo-eTqB9wpGJZdppaoqIUseRN6RHx3acRU7QM2t_Jz-tHRj3J5Nhr17did6cyNKqdbqkdyG8oKw9FjQuqHv88pbgMLJvbRCIOumgb=w416">
               <source media="(min-width: 411px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3e3gYekO892M18Sy4iNQutlp4ig6NklPmP6wZQNpCjLu_xhuzy5uEzLVGRzPaC1gfkNz83M6RdLR92L1mHzKGCi5UvT_OpBjH1mlHn2CN2aAxXI3Ao-0nhq-NIH-noTvsGnVzwiM-CVJMisXDLdE5lv=w285">
               <source media="(min-width: 411px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3dOoa7-c-bhJS1bFT2IE-Is3lPchD9FyAX7Iko_o-zES-XioQ_Qo-eTqB9wpGJZdppaoqIUseRN6RHx3acRU7QM2t_Jz-tHRj3J5Nhr17did6cyNKqdbqkdyG8oKw9FjQuqHv88pbgMLJvbRCIOumgb=w285">
               <source media="(min-width: 360px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3e3gYekO892M18Sy4iNQutlp4ig6NklPmP6wZQNpCjLu_xhuzy5uEzLVGRzPaC1gfkNz83M6RdLR92L1mHzKGCi5UvT_OpBjH1mlHn2CN2aAxXI3Ao-0nhq-NIH-noTvsGnVzwiM-CVJMisXDLdE5lv=w250">
               <source media="(min-width: 360px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3dOoa7-c-bhJS1bFT2IE-Is3lPchD9FyAX7Iko_o-zES-XioQ_Qo-eTqB9wpGJZdppaoqIUseRN6RHx3acRU7QM2t_Jz-tHRj3J5Nhr17did6cyNKqdbqkdyG8oKw9FjQuqHv88pbgMLJvbRCIOumgb=w250">
               <source media="(min-width: 240px)" srcset="https://lh3.googleusercontent.com/pw/ACtC-3e3gYekO892M18Sy4iNQutlp4ig6NklPmP6wZQNpCjLu_xhuzy5uEzLVGRzPaC1gfkNz83M6RdLR92L1mHzKGCi5UvT_OpBjH1mlHn2CN2aAxXI3Ao-0nhq-NIH-noTvsGnVzwiM-CVJMisXDLdE5lv=w166">
               <img class="my-3 mx-auto d-block" src="https://lh3.googleusercontent.com/pw/ACtC-3dOoa7-c-bhJS1bFT2IE-Is3lPchD9FyAX7Iko_o-zES-XioQ_Qo-eTqB9wpGJZdppaoqIUseRN6RHx3acRU7QM2t_Jz-tHRj3J5Nhr17did6cyNKqdbqkdyG8oKw9FjQuqHv88pbgMLJvbRCIOumgb" alt="Photo of an open journal">
            </picture></a>
        </div>
    </div>
   <a class="carousel-control-prev" href="#carousel1" role="button" data-slide="prev">
       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
       <span class="sr-only">Previous</span>
   </a>
   <a class="carousel-control-next" href="#carousel1" role="button" data-slide="next">
       <span class="carousel-control-next-icon" aria-hidden="true"></span>
       <span class="sr-only">Next</span>
   </a>
</div>

## TasksDaily

As I began putting together the idea for TasksDaily, I realized I needed to make something simple, easy to use and easy to understand that would be flexible enough so that people with similar, or equal, needs to mine would find useful. That's how I decided that the daily objectives would be user defined tasks instead, and that the user would be able to choose when to perform these tasks inside their weekly schedule and where to group them (tasks are sorted by user defined categories). This allows some users to make a set of tasks that more closely resemble a schedule while other users can sort their tasks within whatever criteria they desire.  

<div class="embed-responsive embed-responsive-16by9 my-3">
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/_XBB1yKDBd4?rel=0" allowfullscreen=""></iframe>
</div>

### What went right

I think I did a good job of making sure I supported many viewport sizes for the mobile compatibility required in the project's specifications. [Bootstrap <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">] came in handy, but I ended up overwriting it for some elements, like cards. Granted, it's not perfect and some viewport sizes may not enjoy as much functionality as others.  
Teaching myself how to implement the [calendar <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">] and [datetime <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">] [Python <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">] modules with [Django <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">] to provide important functionality to some views was a big highlight.  
And lastly, though limited, I think I made good use of the [Google Charts <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">]'s [Column Charts <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">](https://developers.google.com/chart/interactive/docs/gallery/columnchart) within the ***Progress*** view.  
I also made sure that users that disable scripts on their browser could fully enjoy the functionality of the app, despite their less interactive user experience.

### What went wrong

The biggest challenges I faced during development were external. I tried to handle multiple other things at once and develop other projects simultaneously, which resulted in very, very slow development.
Sometimes unexpected things would pop up which would reduce progression to a halt. Two that I clearly remember are:

- The version of the [CS50’s Web Programming with Python and JavaScript <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">] course I was doing was updated and a new project set was added. I decided to complete the new assignment before moving forward with the development of TasksDaily.
- The HDD dedicated to my files started failing and I had to back all its data and replace it.

These two stopped progress for about a week, each, which is not that bad. The biggest hurdle was getting back on track right after.  
Another thing that made progression slower than it should have been was the fact that the design of the web app was not set in stone from the beginning. I didn't plan ahead all the views or all the models I would use as clearly as I needed to. This meant that whenever I got an idea for a more convenient way of doing things or for a new view that would improve the user experience or functionality of the app, I would end up wasting considerable time developing the new feature instead of testing the previous feature properly. Which lead to one of the biggest mistakes I made.  
I failed to implement the principles of Continuous Integration and Continuous Delivery and I didn't make testing automatic with each new feature implemented. Even if I take into consideration that I was making all the development locally, I could have taken advantage of [Django <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">]'s testing features, which I did not, as I was testing everything manually. Allocating a bit of time to develop automatic testing functions that integrate with [Django <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">] would have saved me a lot of time in the end.  
As the end of the year was approaching I ultimately decided to scrap some features and simplify others in order to prioritize functionality over compatibility and convenience. Some of these were:

- JavaScript code that is compatible with most browsers
- More default date ranges to check user progress
- Custom date ranges to check user progress
- Let users change their password and delete their accounts
- Change TasksDaily's themes

### Lessons learned

I think for any new application or project I develop, going forward, I'll take CI/CD practices to heart and I'll make sure to have a concise idea of the design. I'll try to make my code less repetitive and convoluted, since there always is a better way. And since taking advantage of the features included with the framework by reading the documentation was extremely helpful, I'd like to get more acquainted with [Django <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">] (or other frameworks) in order to better implement things.

### The future of TasksDaily

As of right now, with the course over, having received a passing grade and a nice [new certificate <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">], the next step is to iron out the issues that may hurt compatibility across browsers in order to make TasksDaily available to people.
Then I'd like to implement the other missing features and any other suggested through feedback, so long as they do not considerably change the purpose and functionality of the app. Also, I'd like to make a version in Spanish.
With what I've learned with this app I'd ultimately like to make (someday) a user defined rewards system, as suggested by a friend, and that may integrate with either TasksDaily or a new, more fleshed out web app.  
This is it for TasksDaily. Thanks for reading.



[Final Project <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">]: <https://cs50.harvard.edu/web/2020/projects/final/capstone/>
[CS50's Introduction to Computer Science <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">]: <https://cs50.harvard.edu/x/2020/notes/0/>
[Fitness Programmer]: <{{site.projects[0].url }}>
[R8Books]: <{{site.projects[1].url }}>
[CS50’s Web Programming with Python and JavaScript <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">]: <https://cs50.harvard.edu/web/2018/>
[Django <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">]: <https://www.djangoproject.com/>
[Flask <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">]: <https://flask.palletsprojects.com/en/1.1.x/>
[GitHub <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">]: <https://github.com/>
[bullet journal <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">]: <https://bulletjournal.com/>
[new certificate <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">]: <https://certificates.cs50.io/68fbe128-254d-42ef-a13c-a3c208bb3d2d.png?size=letter>
[Bootstrap <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">]: <https://getbootstrap.com/>
[Google Charts <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">]: <https://developers.google.com/chart>
[Column Charts <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">]: <https://developers.google.com/chart/interactive/docs/gallery/columnchart>
[Python <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">]: <https://www.python.org/>
[calendar <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">]: <https://docs.python.org/3/library/calendar.html?highlight=calendar#module-calendar>
[datetime <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">]: <https://docs.python.org/3/library/datetime.html?highlight=datetime#module-datetime>
