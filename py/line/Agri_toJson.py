import pandas as pd
import json

file = 'China_agri.csv'
data = pd.read_csv(file, header=None, encoding='GBK',index_col=0)
data.fillna(value='null',inplace=True)
year = [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021]
year_str = ['2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021']

people=data.iloc[:4]
assets=data.iloc[4:8]
agri=data.iloc[19:24]
GDP=data.iloc[11:15]


for each in ['people','assets','agri','GDP']:
    all = []
    for i in eval(each).iterrows():
        one = []
        one.append(str(i[0]))
        if  i[1].to_list() == year:
            one.extend(year_str)
        else:
            one.extend(i[1].to_list())
        all.append(one)
    with open('line_{0}.json'.format(each), 'w', encoding='UTF-8') as f:
        json.dump(all, f, ensure_ascii=False)	

    