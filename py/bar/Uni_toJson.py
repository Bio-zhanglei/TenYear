#!/usr/bin/env python
# coding: utf-8
# Author: ZHANG Lei
# Mail: zhanglei_njau@163.com
# Time: 2022-04-24 13:34:03
# Notes: Personal Use Only
# Version: python 3.7.6

###将选定数据转为json

import pandas as pd

file = 'Uni_year.tsv'
data = pd.read_csv(file, sep='\t', index_col=0,encoding="GBK")
data.fillna(value=0,inplace=True)
data
(
data.T
.drop(['河南牧业经济学院','吉林农业科技学院','信阳农林学院','仲恺农业工程学院'])
.to_json('Uni_year.json',force_ascii=False)
)