import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class StatsReport extends StatelessWidget {
  const StatsReport({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/StatsReport.svg');
}
