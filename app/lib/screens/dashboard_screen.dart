import 'dart:math';
import 'package:flutter/material.dart';
import 'package:fl_chart/fl_chart.dart';

class AdminDashboard extends StatefulWidget {
  const AdminDashboard({super.key});

  @override
  State<AdminDashboard> createState() => _AdminDashboardState();
}

class _AdminDashboardState extends State<AdminDashboard> {
  int? touchedPieIndex;

  // Data used by charts
  final List<double> barValues = [10247, 25680, 45, 1234];
  final List<String> barLabels = ['Alumni', 'Students', 'Events', 'Jobs'];
  final List<Color> barColors = [
    Colors.blue,
    Colors.green,
    Colors.purple,
    Colors.orange
  ];

  final List<Map<String, Object>> pieData = [
    {"title": "CS", "value": 3245.0, "color": Colors.blue},
    {"title": "IT", "value": 2156.0, "color": Colors.green},
    {"title": "ECE", "value": 1890.0, "color": Colors.amber},
    {"title": "Mech", "value": 2956.0, "color": Colors.deepOrange},
  ];

  String _formatLeftLabel(double value) {
    if (value >= 1000000) return '${(value / 1000000).toStringAsFixed(1)}M';
    if (value >= 1000) return '${(value / 1000).toStringAsFixed(0)}K';
    return value.toStringAsFixed(0);
  }

  String _formatNumber(double v) {
    if (v >= 1000000) return '${(v / 1000000).toStringAsFixed(1)}M';
    if (v >= 1000) return '${(v / 1000).toStringAsFixed(v >= 10000 ? 0 : 1)}K';
    return v.toStringAsFixed(0);
  }

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;

    // bar width responsive
    final double barWidth =
    (screenWidth / (barValues.length * 8)).clamp(8.0, 28.0);

    // calculate maxY so bars fit comfortably
    final double rawMax = barValues.reduce(max);
    final double maxY = max(50, rawMax * 1.25);

    return Scaffold(
      backgroundColor: Colors.grey[100],
      appBar: AppBar(
        title:  Text("Admin Dashboard",style: TextStyle(fontWeight:FontWeight.bold),),
        leadingWidth: 40,
        leading: Icon(Icons.school_outlined,size: 50,color: Color(0xFF00C8E0),),
        backgroundColor: Colors.blueAccent,
        actions: [
          Padding(
            padding: const EdgeInsets.only(right: 8.0),
            child: Container(
              padding: const EdgeInsets.all(2.0),
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                border: Border.all(color: Colors.blueAccent,width: 2)
              ),
              child: GestureDetector(
                onTap: (){
                  Navigator.pushNamed(context, '/profile');
                },
                child: CircleAvatar(
                  radius: 25,
                  backgroundImage: AssetImage('assets/logos/profi.jpg'),
                ),
              ),
            ),
          )
        ],
      ),
      body: SafeArea(
        child: ListView(
          padding: EdgeInsets.fromLTRB(
              16, 16, 16, 16 + MediaQuery.of(context).padding.bottom),
          children: [
            // Responsive grid
            LayoutBuilder(builder: (context, constraints) {
              final int crossAxisCount = constraints.maxWidth > 720 ? 4 : 2;
              final double spacing = 12 * (crossAxisCount - 1);
              final double availableWidth = constraints.maxWidth - spacing;
              final double itemWidth = availableWidth / crossAxisCount;
              const double desiredItemHeight = 140;
              final double childAspectRatio = itemWidth / desiredItemHeight;

              return GridView.count(
                crossAxisCount: crossAxisCount,
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                crossAxisSpacing: 12,
                mainAxisSpacing: 10,
                childAspectRatio: childAspectRatio,
                children: const [
                  StatCard(
                    title: "Total Alumni",
                    value: "10,247",
                    change: "+12% from last month",
                    color: Colors.blue,
                    icon: Icons.people,
                  ),
                  StatCard(
                    title: "Active Students",
                    value: "25,680",
                    change: "+8% from last month",
                    color: Colors.green,
                    icon: Icons.school,
                  ),
                  StatCard(
                    title: "Events of this month",
                    value: "45",
                    change: "+25% from last month",
                    color: Colors.purple,
                    icon: Icons.event,
                  ),
                  StatCard(
                    title: "Job Placements",
                    value: "1,234",
                    change: "+15% from last month",
                    color: Colors.orange,
                    icon: Icons.work,
                  ),
                ],
              );
            }),

            const SizedBox(height: 20),

            // Bar chart
            Container(
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(12),
              ),
              height: 320,
              child: BarChart(
                BarChartData(
                  maxY: maxY,
                  alignment: BarChartAlignment.spaceAround,
                  barTouchData: BarTouchData(
                    enabled: true,
                    touchTooltipData: BarTouchTooltipData(
                      // getTooltipColor: (group) =>
                      // Colors.grey[800],
                      // tooltipBackgroundColor: Colors.grey[800],
                      // ✅ fixed for latest version
                      getTooltipItem:
                          (group, groupIndex, rod, rodIndex) {
                        final label = barLabels[group.x.toInt()];
                        final value = rod.toY;
                        return BarTooltipItem(
                          '$label\n${_formatNumber(value)}',
                          const TextStyle(
                              color: Colors.white,
                              fontWeight: FontWeight.bold),
                        );
                      },
                    ),
                  ),
                  gridData: FlGridData(show: true, drawVerticalLine: false),
                  borderData: FlBorderData(show: false),
                  titlesData: FlTitlesData(
                    bottomTitles: AxisTitles(
                      sideTitles: SideTitles(
                        showTitles: true,
                        reservedSize: 42,
                        getTitlesWidget: (value, meta) {
                          final idx = value.toInt();
                          if (idx < 0 || idx >= barLabels.length) {
                            return const SizedBox.shrink();
                          }
                          return Padding(
                            padding: const EdgeInsets.only(top: 8.0),
                            child: Text(
                              barLabels[idx],
                              style: const TextStyle(
                                  fontSize: 12, fontWeight: FontWeight.w600),
                            ),
                          );
                        },
                      ),
                    ),
                    leftTitles: AxisTitles(
                      sideTitles: SideTitles(
                        showTitles: true,
                        reservedSize: 48,
                        getTitlesWidget: (value, meta) {
                          return Padding(
                            padding: const EdgeInsets.only(right: 8.0),
                            child: Text(
                              _formatLeftLabel(value),
                              style: const TextStyle(fontSize: 10),
                            ),
                          );
                        },
                        interval: max(1, (maxY / 5).floorToDouble()),
                      ),
                    ),
                    rightTitles:
                    AxisTitles(sideTitles: SideTitles(showTitles: false)),
                    topTitles:
                    AxisTitles(sideTitles: SideTitles(showTitles: false)),
                  ),
                  barGroups: List.generate(barValues.length, (i) {
                    return BarChartGroupData(
                      x: i,
                      barRods: [
                        BarChartRodData(
                          toY: barValues[i],
                          width: barWidth,
                          color: barColors[i],
                          borderRadius: BorderRadius.zero,
                          backDrawRodData: BackgroundBarChartRodData(
                              show: true,
                              toY: maxY,
                              color: Colors.grey[200]),
                        ),
                      ],
                      showingTooltipIndicators: [0],
                    );
                  }),
                ),
              ),
            ),

            const SizedBox(height: 20),

            // Pie chart
            Container(
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(12),
              ),
              height: 260,
              child: PieChart(
                PieChartData(
                  pieTouchData: PieTouchData(
                    touchCallback: (event, response) {
                      if (!event.isInterestedForInteractions ||
                          response == null ||
                          response.touchedSection == null) {
                        setState(() => touchedPieIndex = -1);
                        return;
                      }
                      setState(() {
                        touchedPieIndex =
                            response.touchedSection!.touchedSectionIndex;
                      });
                    },
                  ),
                  sections: List.generate(pieData.length, (i) {
                    final isTouched = i == touchedPieIndex;
                    final double radius = isTouched ? 66 : 52;
                    final Map d = pieData[i];
                    return PieChartSectionData(
                      color: d["color"] as Color,
                      value: d["value"] as double,
                      title:
                      '${d["title"]}\n${(d["value"] as double).toStringAsFixed(0)}',
                      radius: radius,
                      titleStyle: const TextStyle(
                          fontSize: 12,
                          fontWeight: FontWeight.bold,
                          color: Colors.white),
                    );
                  }),
                  centerSpaceRadius: 28,
                ),
              ),
            ),

             SizedBox(height: 20),

            // Department table
            Container(
              padding:  EdgeInsets.all(12),
              decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(12)),
              child: SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: DataTable(
                  columns:  [
                    DataColumn(label: Text("Department")),
                    DataColumn(label: Text("Alumni")),
                    DataColumn(label: Text("Students")),
                    DataColumn(label: Text("Placement %")),
                  ],
                  rows:  [
                    DataRow(cells: [
                      DataCell(Text("Computer Science")),
                      DataCell(Text("3245")),
                      DataCell(Text("8920")),
                      DataCell(Text("95%"))
                    ]),
                    DataRow(cells: [
                      DataCell(Text("Information Tech")),
                      DataCell(Text("2156")),
                      DataCell(Text("6540")),
                      DataCell(Text("92%"))
                    ]),
                    DataRow(cells: [
                      DataCell(Text("Electronics")),
                      DataCell(Text("1890")),
                      DataCell(Text("4320")),
                      DataCell(Text("88%"))
                    ]),
                    DataRow(cells: [
                      DataCell(Text("Mechanical")),
                      DataCell(Text("2956")),
                      DataCell(Text("5680")),
                      DataCell(Text("85%"))
                    ]),
                  ],
                ),
              ),
            ),

             SizedBox(height: 16),
          ],
        ),
      ),
    );
  }
}

class StatCard extends StatelessWidget {
  final String title;
  final String value;
  final String change;
  final Color color;
  final IconData icon;

  const StatCard({
    super.key,
    required this.title,
    required this.value,
    required this.change,
    required this.color,
    required this.icon,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(12),
      decoration: BoxDecoration(
          color: Colors.white, borderRadius: BorderRadius.circular(12)),
      child: Row(
        children: [
          CircleAvatar(
              backgroundColor: color.withOpacity(0.15),
              child: Icon(icon, color: color)),
           SizedBox(width: 12),
          Expanded(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title,
                    style:  TextStyle(
                        fontWeight: FontWeight.w700, fontSize: 13),
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis),
                 SizedBox(height: 6),
                FittedBox(
                  fit: BoxFit.scaleDown,
                  alignment: Alignment.centerLeft,
                  child: Text(value,
                      style:  TextStyle(
                          fontSize: 18, fontWeight: FontWeight.w800)),
                ),
                 SizedBox(height: 6),
                Text(change,
                    style: TextStyle(
                        color: Colors.grey[600], fontSize: 12),
                    maxLines: 2),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
