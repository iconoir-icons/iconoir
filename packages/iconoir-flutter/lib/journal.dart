import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Journal extends StatelessWidget {
  const Journal({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Journal.svg');
}
