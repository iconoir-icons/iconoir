import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Activity extends StatelessWidget {
  const Activity({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Activity.svg');
}
