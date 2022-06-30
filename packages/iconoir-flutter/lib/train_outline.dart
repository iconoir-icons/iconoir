import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class TrainOutline extends StatelessWidget {
  const TrainOutline({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/TrainOutline.svg');
}
