import os
import numpy as np
import matplotlib.pyplot as plt
plt.switch_backend('Agg')

from Util import Util

file_path = "../data/resnet/resnet_split60_timeline.csv"
file_with_headers_path = "../data/resnet/resnet_split60_timeline_withheader.csv"

pdf = Util.load_data_as_pdf(file_name=file_with_headers_path)
npy = Util.load_data_as_numpy(file_name=file_path)

print(pdf.columns)

datetime_vals = pdf[['split_id', 'seq1_time', 'c0_c1_copy_time', 'seq2_time', 'seq_fc_time',
       'mb_device_0_start_time', 'mb_device_0_end_time', 'c0_c1_cp_start_time',
       'c0_c1_cp_end_time', 'mb_device_1_start_time', 'mb_device_1_end_time',
       'mb_fc_start_time', 'mb_fc_end_time', 'mb_device_0_start_datetime',
       'mb_device_0_end_datetime', 'c0_c1_cp_start_datetime',
       'c0_c1_cp_end_datetime', 'mb_device_1_start_datetime',
       'mb_device_1_end_datetime', 'mb_fc_start_datetime',
       'mb_fc_end_datetime']]

time_ids = ['Cuda:0 Seq1 FW'
    , 'Cuda0:Cuda1 Copy',
            'Cuda:1 Seq2 FW',
            'Cuda1: FC FW'
            ]

def plot(means, labels, fig_name):
    fig, ax = plt.subplots()
    ax.bar(means[0],
           align='center', alpha=0.5, width=0.2)
    ax.set_ylabel('ResNet50 Execution Time (Second)')
    ax.set_xticks(np.arange(len(means)))
    ax.set_xticklabels(labels)
    ax.yaxis.grid(True)
    plt.tight_layout()
    plt.savefig(fig_name)
    plt.close(fig)


print(datetime_vals.shape)

datetime_vals_npy = datetime_vals.to_numpy()

print(datetime_vals_npy.shape)
seq1 = []
cps = []
seq2 = []
fc = []
for id, record in enumerate(datetime_vals_npy):
    print(id, record[0], record[1], record[2], record[3] )
    seq1.append(record[0])
    cps.append(record[1])
    seq2.append(record[2])
    fc.append(record[3])



plot([seq1, cps, seq2, fc],
     ['Cuda0:Seq1', 'CP', 'Cuda1:Seq2', 'Cuda1:FC'],
     'plot1.png')