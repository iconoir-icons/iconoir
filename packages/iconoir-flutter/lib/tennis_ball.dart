import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class TennisBall extends StatelessWidget {
  const TennisBall({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/TennisBall.svg');
}
