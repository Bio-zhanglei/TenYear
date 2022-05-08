import pandas as pd
import json

file = 'China_GDP.csv'
data = pd.read_csv(file, header=None, encoding='GBK',index_col=0)
year = [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021]
distinct = ['北京', '天津', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '上海', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '重庆', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆']
distinct_full = ['北京市','天津市','河北省','山西省','内蒙古自治区','辽宁省','吉林省','黑龙江省','上海市','江苏省','浙江省','安徽省','福建省','江西省','山东省','河南省','湖北省','湖南省','广东省','广西壮族自治区','海南省','重庆市','四川省','贵州省','云南省','西藏自治区','陕西省','甘肃省','青海省','宁夏回族自治区','新疆维吾尔自治区']

GDP=data.iloc[:32]
first=data.iloc[32:64]
second=data.iloc[64:96]
third=data.iloc[96:128]
agri=data.iloc[128:160]

# GDP_res = (
# GDP.T
# .set_index('GDP')
# .loc[year]
# .rename(columns=dict(zip(distinct_full,distinct))).T
# )

# GDP_json = dict()
# for i in GDP_res.iteritems():
#     GDP_json[i[0]] = []
#     for m,n in enumerate(i[1]):
#         GDP_json[i[0]].append({'name':distinct[m],'value':n})

all_json={}
for each in ['GDP','first','second','third','agri']:
    data_res = eval(each).T.set_index(each).loc[year].rename(columns=dict(zip(distinct_full,distinct))).T
    
    data_json = dict()
    for i in data_res.iteritems():
        data_json[i[0]] = []
        data_json[str(i[0])+'max'] = round(i[1].max(),0)
        data_json[str(i[0])+'sum'] = round(i[1].sum(),0)
        for m,n in enumerate(i[1]):
            data_json[i[0]].append({'name':distinct[m],'value':n})
    all_json[each]=data_json
    
    #with open('{0}.json'.format(each), 'w', encoding='UTF-8') as f:
        #json.dump(data_json, f, ensure_ascii=False)
else:
    with open('China_GDP.json', 'w', encoding='UTF-8') as f:
        json.dump(all_json, f, ensure_ascii=False)	
    