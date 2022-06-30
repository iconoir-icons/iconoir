import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class DashboardDots extends StatelessWidget {
  const DashboardDots({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/DashboardDots.svg');
}
