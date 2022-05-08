#!/usr/bin/env python
# coding: utf-8
# Author: ZHANG Lei
# Mail: zhanglei_njau@163.com
# Time: 2022-04-24 13:34:03
# Notes: Personal Use Only
# Version: python 3.7.6

###将选定数据转为json

import pandas as pd

file = 'SCI_style.tsv'
data = pd.read_csv(file, sep='\t', index_col=0)

style = ['Agricultural Engineering',
         'Agriculture Dairy Animal Science',
         'Agriculture Multidisciplinary',
         'Agronomy',
         'Fisheries',
         'Food Science Technology',
         'Forestry',
         'Plant Sciences',
         'Soil Science',
         'Veterinary Sciences',
         'Zoology'
         ]
style_CN = ['农业工程学','乳品和动物科学','农业-多学科','农学','水产学','食品科学','林学','植物科学','土壤科学','兽医学','动物学']


(
data.loc[style,:]
.rename(index=dict(zip(style,style_CN)))
.to_json('SCI_Agricul.json',force_ascii=False)
)