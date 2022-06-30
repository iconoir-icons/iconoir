import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BedReady extends StatelessWidget {
  const BedReady({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/BedReady.svg');
}
