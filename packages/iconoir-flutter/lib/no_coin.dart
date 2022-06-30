import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class NoCoin extends StatelessWidget {
  const NoCoin({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/NoCoin.svg');
}
