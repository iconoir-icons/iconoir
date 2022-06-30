import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Glasses extends StatelessWidget {
  const Glasses({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Glasses.svg');
}
