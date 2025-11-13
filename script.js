// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 案例1: 双轴折线图
    const dualAxisCtx = document.getElementById('dualAxisChart').getContext('2d');
    new Chart(dualAxisCtx, {
        type: 'line',
        data: {
            labels: ['合作前', '第1季度', '第2季度', '第3季度', '当前'],
            datasets: [
                {
                    label: '故障修复时长(小时)',
                    data: [4.5, 3.2, 2.1, 1.5, 1.2],
                    borderColor: '#1a73e8',
                    backgroundColor: 'rgba(26, 115, 232, 0.1)',
                    yAxisID: 'y',
                    tension: 0.3
                },
                {
                    label: '运维成本指数',
                    data: [100, 85, 72, 65, 62],
                    borderColor: '#34a853',
                    backgroundColor: 'rgba(52, 168, 83, 0.1)',
                    yAxisID: 'y1',
                    tension: 0.3
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: '故障修复时长(小时)'
                    },
                    min: 0,
                    max: 5
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: '运维成本指数'
                    },
                    min: 50,
                    max: 110,
                    grid: {
                        drawOnChartArea: false,
                    },
                }
            }
        }
    });
    
    // 案例2: 热力图
    const heatmap = document.getElementById('heatmap');
    const heatmapWidth = heatmap.offsetWidth;
    const heatmapHeight = heatmap.offsetHeight;
    
    // 生成随机热力点
    for (let i = 0; i < 150; i++) {
        const dot = document.createElement('div');
        dot.className = 'heatmap-dot';
        dot.style.left = Math.random() * (heatmapWidth - 10) + 'px';
        dot.style.top = Math.random() * (heatmapHeight - 10) + 'px';
        
        // 东部地区密度更高
        if (Math.random() > 0.3) {
            dot.style.left = (Math.random() * 0.7 + 0.15) * heatmapWidth + 'px';
        }
        
        // 随机大小和透明度
        const size = 5 + Math.random() * 8;
        dot.style.width = size + 'px';
        dot.style.height = size + 'px';
        dot.style.opacity = 0.5 + Math.random() * 0.5;
        
        heatmap.appendChild(dot);
    }
    
    // 案例2: 仪表盘
    // 响应时效仪表盘
    const responseGaugeCtx = document.getElementById('responseGauge').getContext('2d');
    new Chart(responseGaugeCtx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [10, 90],
                backgroundColor: ['#1a73e8', '#f0f0f0'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            circumference: 180,
            rotation: -90,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            }
        }
    });
    
    // 故障解决率仪表盘
    const resolutionGaugeCtx = document.getElementById('resolutionGauge').getContext('2d');
    new Chart(resolutionGaugeCtx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [99.9, 0.1],
                backgroundColor: ['#34a853', '#f0f0f0'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            circumference: 180,
            rotation: -90,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            }
        }
    });
    
    // 服务场景仪表盘
    const scenarioGaugeCtx = document.getElementById('scenarioGauge').getContext('2d');
    new Chart(scenarioGaugeCtx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [100, 0],
                backgroundColor: ['#fbbc05', '#f0f0f0'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            circumference: 180,
            rotation: -90,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            }
        }
    });
    
    // 案例3: 对比柱状图
    const comparisonCtx = document.getElementById('comparisonChart').getContext('2d');
    new Chart(comparisonCtx, {
        type: 'bar',
        data: {
            labels: ['合作前', '合作后'],
            datasets: [{
                label: '物流场景设备故障率(%)',
                data: [18, 6.84],
                backgroundColor: [
                    'rgba(234, 67, 53, 0.7)',
                    'rgba(52, 168, 83, 0.7)'
                ],
                borderColor: [
                    'rgb(234, 67, 53)',
                    'rgb(52, 168, 83)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '故障率(%)'
                    }
                }
            }
        }
    });
    
    // 案例3: 仓储分布图
    const warehouseMap = document.getElementById('warehouseMap');
    const mapWidth = warehouseMap.offsetWidth;
    const mapHeight = warehouseMap.offsetHeight;
    
    // 定义主要物流干线
    const logisticsLines = [
        { name: '京广线', points: [{x: 0.2, y: 0.3}, {x: 0.5, y: 0.5}, {x: 0.8, y: 0.7}] },
        { name: '沪昆线', points: [{x: 0.7, y: 0.2}, {x: 0.5, y: 0.5}, {x: 0.3, y: 0.8}] },
        { name: '沿海线', points: [{x: 0.8, y: 0.3}, {x: 0.7, y: 0.6}, {x: 0.6, y: 0.9}] }
    ];
    
    // 生成仓储点
    logisticsLines.forEach(line => {
        line.points.forEach(point => {
            const warehouse = document.createElement('div');
            warehouse.className = 'warehouse-point';
            warehouse.style.left = (point.x * 100) + '%';
            warehouse.style.top = (point.y * 100) + '%';
            warehouseMap.appendChild(warehouse);
            
            // 添加标签
            const label = document.createElement('div');
            label.className = 'warehouse-label';
            label.textContent = line.name + '节点';
            label.style.left = (point.x * 100) + '%';
            label.style.top = (point.y * 100 - 20) + '%';
            warehouseMap.appendChild(label);
        });
    });
});