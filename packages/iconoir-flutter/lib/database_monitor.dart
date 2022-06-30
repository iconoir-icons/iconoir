import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class DatabaseMonitor extends StatelessWidget {
  const DatabaseMonitor({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/DatabaseMonitor.svg');
}
