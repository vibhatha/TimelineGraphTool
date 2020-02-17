import os
import numpy as np

from Util import Util

file_path = "../data/resnet/resnet_split60_timeline.csv"
file_with_headers_path = "../data/resnet/resnet_split60_timeline_withheader.csv"

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



def pre_process_data(data=None, filter_indices=[]):
    rowvalues = []
    for i, datapoint in enumerate(data):

        values = "["
        item_count = len(datapoint)
        split_id = str(i)
        # print("Split Id: ", split_id)

        row_statement = "dataTable.addRows([\n"
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
                    # print(i, statement)
                    rowvalues.append(statement)
                    row_statement += statement + "\n"

        row_statement += "]);"
        # if i in filter_indices:
        #     print(row_statement)
    return rowvalues


def chunk(list, partitions):
    for i in range(0, len(list), partitions):
        yield list[i:i + partitions]

    # How many elements each


# list should have
n = 4
filter_indices = [15,16,17,18,19,20]
rowvalues = pre_process_data(data=datetime_vals_npy,
                             filter_indices=filter_indices)

chunks = list(chunk(rowvalues, n))


print("-----------------------")

for chunk_id, chunk in enumerate(chunks):
    row_statement = "dataTable.addRows([\n"
    for element_id, element in enumerate(chunk):
        value = chunks[-(1 + chunk_id)][-(1 + element_id)]
        row_statement += value + "\n"
    row_statement += "]);"
    print(row_statement)
#
# for row_id, data in enumerate(rowvalues):
#     print(row_id, data)
