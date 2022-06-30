import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Wind extends StatelessWidget {
  const Wind({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Wind.svg');
}
