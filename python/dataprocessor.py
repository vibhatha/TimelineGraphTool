import os
import numpy as np

from Util import Util

file_path = "../data/resnet/resnet_split120_timeline.csv"
file_with_headers_path = "../data/resnet/resnet_split120_timeline_withheaders.csv"

pdf = Util.load_data_as_pdf(file_name=file_with_headers_path)
npy = Util.load_data_as_numpy(file_name=file_path)

print(pdf.columns)

datetime_vals = pdf[['split_id', 'mb_device_0_start_datetime',
                     'mb_device_0_end_datetime', 'c0_c1_cp_start_datetime',
                     'c0_c1_cp_end_datetime', 'mb_device_1_start_datetime',
                     'mb_device_1_end_datetime', 'mb_fc_start_datetime',
                     'mb_fc_end_datetime']]

time_ids = ['Cuda:0 Seq1 FW'
    , 'Cuda0:Cuda1 Copy',
            'Cuda:1 Seq2 FW',
            'Cuda1: FC FW'
            ]

print(datetime_vals.shape)

datetime_vals_npy = datetime_vals.to_numpy()

print(datetime_vals_npy.shape)

full_str = ""

len_data = len(datetime_vals_npy)
main_index = 0
i = 0
filter_indices = [0, 1,2,5, 30, 31, 32, 33, 34, 35, 88, 89, 90, 116, 119, 120 ]
for i, datapoint in enumerate(datetime_vals_npy):

    values = "["
    item_count = len(datapoint)
    split_id = str(datapoint[0] - 1)
    #print("Split Id: ", split_id)


    for j, dataitem in enumerate(datapoint[1:]):
        # print(i, j, dataitem)
        if j % 2 == 0:
            lbl_name = '"' + split_id + '::' + time_ids[int(j / 2)] + '"'
            values += lbl_name
            start = datapoint[1 + j]
            end = datapoint[1 + (j + 1)]
            start_time = Util.extract_date_info(start)
            end_time = Util.extract_date_info(end)
            start_date_str = "new Date(" + start_time + ")"
            end_date_str = "new Date(" + end_time + ")"
            statement = "[" + lbl_name + ", " + start_date_str + ", " \
                                                                 "" + \
                        end_date_str + "],"
            if i in filter_indices:
                print(statement)

