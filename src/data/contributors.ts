export interface ContributorProfile {
  slug: string;
  name: string;
  country: string;
  photo: string;
  bio: string;
  article: {
    title: string;
    sections: ArticleSection[];
  };
}

export interface ArticleSection {
  heading?: string;
  paragraphs: string[];
}

export const CONTRIBUTOR_PROFILES: ContributorProfile[] = [
  {
    slug: 'amwene-etiang',
    name: 'Amwene Etiang',
    country: 'Uganda',
    photo: '/amwene-etiang.jpeg',
    bio: 'I am currently a research intern at a think tank in Nairobi. In July, I graduated from the University of Bristol with a First Class Law Degree. My aspiration is to qualify as an advocate in Kenya and Uganda and work on climate, ESG and responsible business issues. In my free time, I write articles on various issues (which you can find here) and play tennis.',
    article: {
      title: 'Purchasing freedom: Can economic empowerment emancipate women from intimate partner violence?',
      sections: [
        {
          heading: 'Introduction',
          paragraphs: [
            '37% of women in sub-Saharan Africa have reported experiencing intimate partner violence (IPV) in their lifetime. Most theories of the causes of IPV ascribe it to an expression of power by the perpetrator. Indeed, this is reflected in the patriarchal attitudes of many of the men who have been interviewed in studies referenced in this article. However the saying goes, money is power. Could IPV be combatted by fighting fire with fire?',
            'Prima facie, economically empowering victims would lead to them having greater independence and enable them to change the dynamic of, and even leave an abusive relationship. However, this is not necessarily the case as will be shown. Stöckl et al acknowledged that poverty, unemployment, lack of economic opportunities and gender inequalities are structural factors that impact the risk of a woman suffering IPV. Economic empowerment is a double-edged sword with the potential to both reduce and increase the risk of IPV. This article will make the case for how it can be leveraged to combat IPV in Kenya.',
          ],
        },
        {
          heading: 'What causes IPV?',
          paragraphs: [
            'The main causes of intimate partner violence is the perpetrator\'s desire to exert power and dominance over their partner. Both men and women are perpetrators of domestic violence. Nonetheless, most victims of domestic violence worldwide, including in Kenya, are women. The control theory contends that abusers use violence to maintain their control of their partner. Such notions are particularly prevalent among many men in Kenya. A World Vision article on ending violence against women and girls in Kenya noted that some men and women view domestic violence as a means of expressing their love for their wife and even as a necessary part of a relationship.',
            'In a survey conducted of men in Kenya, one person said that sexual and gender based violence (SGBV) is used \'to teach women their place.\' In a BBC Documentary journalist Tom Odula, joined a group of men who were speaking about domestic violence. One man said he beats his wife to discipline her. Another said it was to make sure that his position as the man of the house is respected. Another said it was to ensure that his wife behaves. However, another mentioned that it is cowardly for men to beat their wives and they should resolve disputes otherwise. Thus, whilst it is by no means every Kenyan man that holds such harmful views, it is evident that perceptions of women as inferior and in need of disciplining are common.',
          ],
        },
        {
          heading: 'Does economic empowerment lead to a reduction in IPV?',
          paragraphs: [
            '\'Gender norms do support the violence, but violence also enforces the performance of gender, maintains gender hierarchies, and is in itself an enactment of gender.\' This was the conclusion of an assessment of men\'s views on domestic violence in Tanzania, the views of the Tanzanian men being similar to those of the Kenyan ones interviewed in the BBC Documentary. Although the article also concluded that violence is based on more than gender but that gender is inextricably linked with it.',
            'It is by no means justifiable for a man to beat his partner in any circumstance, regardless of whether she is financially dependent on him or not. However gender norms, such as a woman being financially dependent on her husband, reenforce hegemonic masculinity. Men seeking to maintain their position as head of the household may choose to resort to violence. However, Jakobsen contended that "hegemonic masculinity is not in itself violent... rather, the \'head of the house\' ideal served to legitimate the violence." When one\'s wife is beaten to maintain this position, and prevent the disorder of it not being followed, the beating was legitimized by the participants in the survey as \'a good beating.\'',
            'Patriarchal gender norms are subverted by women being financially empowered. Gender norms support the violence by legitimizing it. To the extent that financial empowerment increases a woman\'s agency to affect change in her relationship or leave it all together it disrupts gender norms. Intuitively, it would follow that financial empowerment of women as a means of subverting gender norms therefore has the potential to reduce violence. However, economic empowerment of women, whilst increasing a woman\'s agency and making her financially independent, on paper at least, is not enough to prevent IPV.',
            'The resource theory posits that perpetrators of IPV use violence to exert dominance in a relationship because other resources like their education, job, income or standing in the community cannot be used to do so. The relative resource theory contends that when a woman makes more money than her partner, it challenges existing gender norms and men perceive this as undermining their position as the breadwinner. The facts support the relative resource theory as being more probable. Stöckl et al, having conducted a study on IPV in Kenya, concluded that women earning an income was a risk factor for increased IPV in both urban and rural areas. Women earning more than their husbands made them more likely to report violence in both areas. At the same time, the probability of IPV increased if a woman was not able to choose what to do with her money or if she earned more than her partner.',
          ],
        },
        {
          heading: 'What role does economic empowerment have to play in reducing IPV?',
          paragraphs: [
            'It goes without saying that one\'s financial position should not impact the amount of protection they have from IPV. Nonetheless, often it is the case that women who are financially independent will have the capacity and agency to either stand up to their abusive partners or leave them. Despite not necessarily reducing IPV, economic empowerment can and does contribute to lower levels of domestic violence, if at least by enabling women to leave dangerous partners. It is important for women to be financially empowered as it would help them leave their abusive partners and live independent lives.',
            'In an article assessing the work of the Coalition on Violence Against Women Organization (COVAW) Ali identified increasing women\'s agency was identified as one of the ways COVAW has supported victims and survivors of domestic abuse. COVAW has lobbied government to implement policies like Vision 2030 and Second Medium Term Plan which are meant to streamline women in Kenya\'s economic growth and strategy. Complementing this, Informing SA could specify particular issues, projects and policies should be initiated, improved or implemented to specifically support women at risk of or who are victims of IPV. Furthermore, Informing SA could connect survivors of domestic abuse with investors and capital or provide grants to help them continue their lives and earn a living for themselves and their families.',
            'The Stockl study also concluded that women\'s partners should be involved as well in employment opportunities or education opportunities should IPV be reduced in the long term. A 2021 study conducted across Sub Saharan Africa, including Kenya, found that in rural areas there is a noticeable reduction in IPV in rural areas if the household is wealthier as opposed to being moderately rich. However, in urban areas this was not the case. Whilst making households richer may not necessarily reduce IPV, it may reduce male partners feelings of inferiority to their partner and in turn beating her to \'keep her in her place.\' Viewing making a household richer and in turn appeasing men\'s feelings of insecurity for not being able to earn more than their partner as a means of reducing IPV sets a dangerous precedent. Regardless of their income, men who are violent towards their partner cannot be vindicated or excused by their position in society being threatened by their wife. Furthermore, from the statistics of the 2021 study, it is evident that increasing household incomes will not always lead to lower levels of domestic violence.',
          ],
        },
        {
          heading: 'Combatting IPV takes more than economic empowerment.',
          paragraphs: [
            'Interestingly, Eve Ayiera contended that whilst armed conflict challenges the socio-political order of society, violence against women does not make society ungovernable and in fact can be seen as a core element of existing power systems. It appears that many women are in a \'damned if you do, damned if you don\'t\' situation. If they earn more than their partner, they are beaten to keep them in their place. If they are financially dependent on their partner, they maintain gender norms which also reinforce the violence. In order to eradicate IPV, women must be seen and must be felt to have much more significance in society.',
            'There also needs to be robust implementation of laws against domestic violence and changes to the criminal justice system to facilitate victims of domestic violence filing complaints and having these resolved in a timely manner. The patriarchal notions of women being beaten is bolstered by the police and justice system\'s lack of attention paid to victims of domestic abuse. Mistrust of police made it difficult for women to report sexual violence even in peacetime and after the post-election violence. It was noted that some authorities were complicit in perpetrating violence as well. To truly eradicate IPV and deter perpetrators, the police and courts must operate more efficiently and with greater concern for the plight of victims.',
          ],
        },
        {
          heading: 'Conclusion',
          paragraphs: [
            'Economic empowerment of women, whilst by no means is a panacea to IPV, does contribute to increasing women\'s agency and therefore their ability to change the dynamic of their relationship or leave it and rebuild their lives. Informing SA can contribute to increasing women\'s financial independence by lobbying government to implement policies, like the Vision 2030 which are meant to mainstream women in Kenya\'s economic development. It can also provide financial support to female entrepreneurs by connecting them to investors or grant makers.',
            'Regardless, given that men beat their wives for contributing more to the household income than them, it is evident that the solution to IPV is not just increasing a woman\'s or a household\'s income. There must be broader cultural changes on the domestic power dynamics and a shift in perceptions of women to being autonomous agents of equal importance to their partner, regardless of whether they earn more or less than him.',
          ],
        },
      ],
    },
  },
];
